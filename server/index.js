const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// ✅ all CORS origin allowed
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: false,
  })
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
    //   app.post('/orders', async (req, res) => {
    //     try {
    //       const order = req.body;
    //       order.createdAt = new Date();

    //       const result = await ordersCollection.insertOne(order);
    //       console.log('Order Saved:', result.insertedId);

    //       // ===================== EMAIL FIX =====================
    //       // Gmail SMTP Must Use App Password
    //       const transporter = nodemailer.createTransport({
    //         host: 'smtp.zoho.com',
    //         port: 587,
    //         secure: false, // false because TLS/STARTTLS
    //         auth: {
    //           user: process.env.EMAIL_USER, // info@rifibazar.com
    //           pass: process.env.EMAIL_PASS, // KaUXyEgQ9cGP
    //         },
    //       });

    //       // transport verify (to see if working)
    //       transporter.verify((error, success) => {
    //         if (error) {
    //           console.log('❌ SMTP ERROR:', error);
    //         } else {
    //           console.log('✅ SMTP Connected Successfully');
    //         }
    //       });

    //       const mailOptions = {
    //         from: `"Rifi Bazar" <${process.env.EMAIL_USER}>`,
    //         to: order.email,
    //         subject: '🛒 Order Confirmation - Rifi Bazar',
    //         html: `
    // <div style="font-family: Arial, sans-serif; background:#f7f7f7; padding:20px;">
    //   <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.08);">

    //     <!-- Header -->
    //     <div style="background:#ff4d4d; padding:20px; text-align:center; color:#fff;">
    //       <h1 style="margin:0; font-size:24px;">⭐ Order Confirmed ⭐</h1>
    //       <p style="margin:5px 0 0; font-size:14px;">Thanks for shopping with Rifi Bazar</p>
    //     </div>

    //     <!-- Product Image -->
    //     <div style="text-align:center; padding:20px;">
    //       <img
    //         src="${order.product?.image}"
    //         alt="Product Image"
    //         style="max-width:200px; width:100%; border-radius:10px; border:1px solid #eee;"
    //       />
    //     </div>

    //     <!-- Body -->
    //     <div style="padding:25px; color:#333;">
    //       <h2 style="margin-top:0;">Hello ${order.name},</h2>
    //       <p style="font-size:16px; line-height:1.5;">
    //         Your order has been <strong>successfully received!</strong>
    //         We’re preparing everything, and you will get updates soon.
    //       </p>

    //       <div style="margin-top:20px;">
    //         <h3 style="margin-bottom:10px;">🛍️ Order Details</h3>
    //         <div style="background:#fafafa; padding:15px; border-radius:8px; border:1px solid #eee;">
    //           <p style="margin:6px 0;"><strong>Product:</strong> ${
    //             order.product?.title
    //           }</p>
    //           <p style="margin:6px 0;"><strong>Price:</strong> ${
    //             order.product?.price
    //           }৳</p>
    //           <p style="margin:6px 0;"><strong>Quantity:</strong> ${
    //             order.quantity
    //           }</p>
    //           <p style="margin:6px 0;"><strong>Order ID:</strong> ${
    //             order.orderId
    //           }</p>
    //         </div>
    //       </div>

    //       <p style="margin-top:20px; font-size:15px; color:#555;">
    //         If you have any questions, feel free to reply to this email.
    //       </p>

    //       <p style="margin-top:30px; font-size:14px; color:#777;">
    //         — Rifi Bazar Team ❤️
    //       </p>
    //     </div>

    //     <!-- Footer -->
    //     <div style="background:#f2f2f2; text-align:center; padding:12px; font-size:13px; color:#888;">
    //       © ${new Date().getFullYear()} Rifi Bazar — All Rights Reserved
    //     </div>
    //   </div>
    // </div>
    // `,
    //       };

    //       // Send email with async/await
    //       await transporter.sendMail(mailOptions);

    //       res.status(201).json({
    //         message: 'Order saved & email sent successfully!',
    //         id: result.insertedId,
    //       });
    //     } catch (error) {
    //       console.log('❌ Email sending error:', error);
    //       res.status(500).json({ error: error.message });
    //     }
    //   });

    // =================== ORDER SAVE ONLY ===================
    app.post('/orders', async (req, res) => {
      try {
        const order = req.body;
        order.createdAt = new Date();

        // Save order to MongoDB
        const result = await ordersCollection.insertOne(order);
        console.log('Order Saved:', result.insertedId);

        // Response
        res.status(201).json({
          message: 'Order saved successfully!',
          id: result.insertedId,
        });
      } catch (error) {
        console.log('❌ Order saving error:', error);
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
