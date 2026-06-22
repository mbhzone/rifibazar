const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');
const { default: axios } = require('axios');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 5000;

// ✅ all CORS origin allowed
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: false,
  }),
);

// ✅ Middleware ......
app.use(express.json());

// ✅ MongoDB Connection
const uri = `mongodb+srv://rifibazar:${process.env.DB_PASS}@rifiuser.wuxahls.mongodb.net/?appName=rifiUser`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log('✅ MongoDB connected successfully');

    const db = client.db('DateMolassesDB');
    const productCollection = db.collection('products');
    const ordersCollection = db.collection('orders');
    const usersCollection = db.collection('users');
    const blacklistCollection = db.collection('blacklist');

    // -------------------- Routes --------------------

    // Test route
    app.get('/', (req, res) => {
      res.send(' Rifi Bazar Server is running fine!');
    });

    // Save a product
    app.post('/products', async (req, res) => {
      try {
        const productData = req.body;
        const result = await productCollection.insertOne(productData);
        res
          .status(201)
          .json({ message: 'Product saved successfully!', result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get all products (with optional search)
    app.get('/get-products', async (req, res) => {
      try {
        const search = req.query.search;
        let query = {};

        if (search) {
          query = { name: { $regex: search, $options: 'i' } };
        }

        const result = await productCollection
          .find(query)
          .sort({ createdAt: 1 })
          .toArray();

        res.send(result);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Get single product
    app.get('/single-products/:id', async (req, res) => {
      try {
        const id = req.params.id.trim();
        if (!ObjectId.isValid(id))
          return res.status(400).json({ error: 'Invalid product ID' });

        const product = await productCollection.findOne({
          _id: new ObjectId(id),
        });
        if (!product)
          return res.status(404).json({ error: 'Product not found' });

        res.json(product);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Delete a product
    app.delete('/products/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const result = await productCollection.deleteOne({
          _id: new ObjectId(id),
        });
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: 'Delete failed', error });
      }
    });

    app.put('/products/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const updateData = req.body;

        const result = await productCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }, // DO NOT include _id
        );

        res.json({ message: 'Product updated successfully', result });
      } catch (error) {
        console.error('Update failed:', error);
        res.status(500).json({ error: error.message });
      }
    });
    // require rate limiter middleware
    const orderLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 2, // limit each IP to 2 orders per windowMs
      message: {
        success: false,
        message: 'Too many order requests. Please try again later.',
      },
    });
    // order Save with Turnstile and Blacklist
    app.post('/orders', orderLimiter, async (req, res) => {
      try {
        // ===== Honeypot Field Check =====
        if (req.body.website) {
          return res.status(403).send({
            success: false,
            message: 'Bot detected',
          });
        }
        // ===== User-Agent Blocking =====
        const userAgent = req.headers['user-agent'] || '';

        const blockedAgents = [
          'Postman',
          'curl',
          'python-requests',
          'Insomnia',
        ];

        if (
          blockedAgents.some(agent =>
            userAgent.toLowerCase().includes(agent.toLowerCase()),
          )
        ) {
          return res.status(403).send({
            success: false,
            message: 'Access denied',
          });
        }

        if (!req.body.turnstileToken) {
          return res.status(400).send({
            success: false,
            message: 'Verification token is required',
          });
        }

        // ===== Turnstile Verification =====
        const formData = new URLSearchParams();
        formData.append('secret', process.env.TURNSTILE_SECRET_KEY);
        formData.append('response', req.body.turnstileToken);

        const verifyResponse = await axios.post(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          formData,
        );

        if (!verifyResponse.data.success) {
          return res.status(403).send({
            success: false,
            message: 'Bot detected',
          });
        }

        const ipAddress =
          req.headers['x-forwarded-for']?.split(',')[0] ||
          req.socket.remoteAddress;

        const blocked = await blacklistCollection.findOne({
          $or: [
            { visitorId: req.body.visitorId },
            { mobile: req.body.mobile },
            { ipAddress },
          ],
        });

        if (blocked) {
          return res.status(403).send({
            success: false,
            message: 'You are blocked',
          });
        }

        const { turnstileToken, website, ...orderData } = req.body;

        const order = {
          ...orderData,
          ipAddress,
          createdAt: new Date(),
        };

        // Save order to MongoDB
        const result = await ordersCollection.insertOne(order);

        // Response
        res.status(201).json({
          message: 'Order saved successfully!',
          id: result.insertedId,
        });
      } catch (error) {
        console.log(' Order saving error:', error);
        res.status(500).json({ error: error.message });
      }
    });

    // delete order by id
    app.delete('/orders/:id', async (req, res) => {
      try {
        const { id } = req.params;

        // validate ObjectId
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({
            success: false,
            message: 'Invalid order ID',
          });
        }

        const result = await ordersCollection.deleteOne({
          _id: new ObjectId(id),
        });

        if (result.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            message: 'Order not found',
          });
        }

        res.json({
          success: true,
          message: 'Order deleted successfully',
          deletedCount: result.deletedCount,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    });

    // Get orders
    app.get('/get-orders', async (req, res) => {
      try {
        const result = await ordersCollection
          .find()
          .sort({ createdAt: -1 })
          .toArray();
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    //  Get single order by orderId
    app.get('/orders/:orderId', async (req, res) => {
      try {
        const { orderId } = req.params;

        // find by orderId field in the DB
        const order = await ordersCollection.findOne({ orderId: orderId });

        if (!order) {
          return res.status(404).json({ error: 'Order not found' });
        }

        res.json(order);
      } catch (error) {
        console.error('❌ Error fetching order:', error);
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Update order status
    app.patch('/update-order/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { status } = req.body;

        const order = await ordersCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!order) {
          return res.status(404).send({
            message: 'Order not found',
          });
        }

        await ordersCollection.updateOne(
          { _id: new ObjectId(id) },
          {
            $set: { status },
          },
        );

        // if order marked as fake, add to blacklist
        if (status === 'fake') {
          // duplicate blacklist prevent
          const alreadyBlocked = await blacklistCollection.findOne({
            $or: [
              { visitorId: order.visitorId },
              { ipAddress: order.ipAddress },
              { mobile: order.mobile },
            ],
          });

          if (!alreadyBlocked) {
            await blacklistCollection.insertOne({
              visitorId: order.visitorId,
              ipAddress: order.ipAddress,
              mobile: order.mobile,
              reason: 'Fake order',
              createdAt: new Date(),
            });
          }
        }

        res.send({
          success: true,
          status,
        });
      } catch (error) {
        res.status(500).send({
          error: error.message,
        });
      }
    });

    // Admin login (from DB)
    // Load environment variables

    app.post('/admin-login', async (req, res) => {
      try {
        const { email, password } = req.body;

        // ✅ Compare with .env values
        if (
          email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return res.json({
            success: true,
            message: 'Admin login successful',
            user: {
              name: 'Super Admin',
              email: process.env.ADMIN_EMAIL,
              role: 'admin',
            },
          });
        } else {
          return res.status(401).json({
            success: false,
            message: 'Invalid admin credentials',
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Server error',
          error: error.message,
        });
      }
    });

    // Delete all orders
    app.delete('/delete-all-orders', async (req, res) => {
      try {
        const result = await ordersCollection.deleteMany({});

        res.json({
          success: true,
          message: 'All orders deleted successfully',
          deletedCount: result.deletedCount,
        });
      } catch (error) {
        console.error('❌ Delete failed:', error);

        res.status(500).json({
          success: false,
          error: error.message,
        });
      }
    });

    // Clear blacklist
    app.delete('/admin/blacklist/clear', async (req, res) => {
      try {
        const result = await blacklistCollection.deleteMany({});

        res.json({
          success: true,
          message: 'Blacklist cleared successfully',
          deletedCount: result.deletedCount,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    });
    console.log('🏓 MongoDB ready!');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
  }
}

run();

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

module.exports = app;
