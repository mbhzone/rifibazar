const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// ✅ Allow Specific Origins
const allowedOrigins = [
  'http://localhost:5173', // Local frontend
  'https://rifibazar.com', // Live frontend
  'https://www.rifibazar.com', // Live frontend
  'https://rifibazar-7vuv.vercel.app', // Live frontend
];

// ✅ Proper CORS Setup (only once)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.csfnsag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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

    // -------------------- Routes --------------------

    // Test route
    app.get('/', (req, res) => {
      res.send('🚀 Rifi Bazar Server is running fine!');
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
          { $set: updateData } // DO NOT include _id
        );

        res.json({ message: 'Product updated successfully', result });
      } catch (error) {
        console.error('Update failed:', error);
        res.status(500).json({ error: error.message });
      }
    });

    //  order Save
    app.post('/orders', async (req, res) => {
      try {
        const order = req.body;
        console.log(order);

        order.createdAt = new Date();

        const result = await ordersCollection.insertOne(order);
        console.log(result);

        // ✅ Send Email After Order Save
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Rifi Bazar" <${process.env.EMAIL_USER}>`,
          to: order.email,
          subject: '🛒 Order Confirmation - Rifi Bazar',
          html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border-radius: 12px; border: 1px solid #e0e0e0; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1)">
    <div style="background: linear-gradient(90deg, #f97316, #fb923c); padding: 20px; color: white; text-align: center;">
      <h1 style="margin: 0;">Rifi Bazar</h1>
      <p style="margin: 0; font-size: 16px;">Thank you for your order!</p>
    </div>

    <div style="padding: 25px;">
      <h2 style="color: #333;">Hello ${order.name || 'Customer'},</h2>
      <p style="color: #555; font-size: 15px;">
        We’ve received your order and we’re getting it ready to ship. You’ll get another email when your order ships.
      </p>

      <div style="border-top: 2px solid #f97316; margin: 20px 0;"></div>

      <h3 style="color: #f97316;">🛍️ Order Summary</h3>

      <div style="display: flex; align-items: center; gap: 15px; margin-top: 10px;">
        <img src="${
          order.product.image || 'https://via.placeholder.com/100'
        }" alt="Product Image" width="100" height="100" style="border-radius: 8px; object-fit: cover; border: 1px solid #ddd;">
        <div style="margin-left: 10px;">
          <p style="margin: 5px 0; font-size: 16px; font-weight: bold; color: #333;">${
            order.product.title || 'Product Name'
          }</p>
          <p style="margin: 2px 0; color: #555;">Quantity: ${
            order.quantity || 1
          }</p>
          <p style="margin: 2px 0; color: #555;"> Description: <strong>${
            order.product.description || ''
          }</strong></p>
        </div>
      </div>

      <div style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
        <p style="font-size: 16px; font-weight: bold; color: #222;">Total: ${
          order.product.price || 0
        }৳</p>
      </div>

      <div style="margin-top: 25px;">
        <p style="font-size: 14px; color: #666;">Order ID: <strong>${
          order.orderId
        }</strong></p>
        <p style="font-size: 14px; color: #666;">Order Date: ${new Date().toLocaleString()}</p>
      </div>

      <div style="margin-top: 30px; text-align: center;">
        <a href="https://rifibazar.com" style="background-color: #f97316; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; display: inline-block;">
         
Continue Shopping
        </a>
      </div>
    </div>

    <div style="background-color: #fafafa; text-align: center; padding: 15px; font-size: 13px; color: #777;">
      <p>© ${new Date().getFullYear()} Rifi Bazar. All rights reserved.</p>
    </div>
  </div>
  `,
        };

        // ✅ Try sending the mail
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('❌ Email send failed:', error);
          } else {
            console.log('✅ Email sent:', info.response);
          }
        });

        res.status(201).json({
          message: 'Order saved & email sent successfully!',
          id: result.insertedId,
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
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

    // ✅ Get single order by orderId
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

        if (!ObjectId.isValid(id))
          return res.status(400).json({ error: 'Invalid order ID' });

        const result = await ordersCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { status } }
        );

        res.json(result);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
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
