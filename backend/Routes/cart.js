import express from 'express';

import Cart from '../Models/CartModel.js';

const router = express.Router();

// Cart Route
router.post('/', async (req, res) => {
    const result = await Cart.create(req.body);
    console.log(result);
    res.send(result);
});

router.delete('/:name', async (req, res) => {
    const result = await Cart.findOneAndDelete({ name: req.params.name });
    res.send(result);
});

router.get('/', async (req, res) => {
    const products = await Cart.find();
    res.send(products);
  });

  export default router;