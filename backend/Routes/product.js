import express from 'express';

import Product from '../Models/ProductModel.js';

const router = express.Router();

// Products Route
router.post('/', async (req, res) => {
    const result = await Product.insertMany(req.body);
    res.send(result);
  });

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
  });

  export default router;