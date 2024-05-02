import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import {
  MONGO_URL,
  PORT,
} from './config.js';
import cartRouter from './Routes/cart.js';
import productRouter from './Routes/product.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
}));

app.use('/images', express.static('../frontend/public/assets'));

// // Products Route
// app.post('/products', async (req, res) => {
//     const result = await Product.insertMany(req.body);
//     res.send(result);
//   });

// app.get('/products', async (req, res) => {
//     const products = await Product.find();
//     res.send(products);
//   });

app.use('/products', productRouter);

// // Cart Route
// app.post('/cart', async (req, res) => {
//     const result = await Cart.create(req.body);
//     console.log(result);
//     res.send(result);
// });

// app.delete('/cart/:name', async (req, res) => {
//     const result = await Cart.findOneAndDelete({ name: req.params.name });
//     res.send(result);
// });

// app.get('/cart', async (req, res) => {
//     const products = await Cart.find();
//     res.send(products);
//   });

app.use('/cart', cartRouter);

mongoose.connect(MONGO_URL)
  .then(() => {
      console.log('Connected to database');

      app.listen(PORT, () => {
          console.log('Server is running on port ' + PORT);
      });
  })
  .catch((err) => {
      console.log(err);
  });