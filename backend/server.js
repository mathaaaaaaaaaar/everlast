import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import {
  MONGO_URL,
  PORT,
} from './config.js';
import cartRouter from './Routes/cart.js';
import productRouter from './Routes/product.js';
import registerRouter from './Routes/register.js';
import wishlistRouter from './Routes/wishlist.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
}));

app.use('/images', express.static('../frontend/public/assets'));

app.use('/products', productRouter);

app.use('/cart', cartRouter);

app.use('/wishlist', wishlistRouter);

app.use('/register', registerRouter);

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