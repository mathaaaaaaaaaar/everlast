import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import {
  MONGO_URL,
  PORT,
} from './config.js';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const app = express();

app.use(express.json());

app.use(cors())

const Product = mongoose.model('Product', productSchema, 'Products');

app.use('/images', express.static('../frontend/public/assets'));

app.post('/products', async (req, res) => {

    const result = await Product.insertMany(req.body);
    console.log(result);
    res.send(result);
  });

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
  });

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