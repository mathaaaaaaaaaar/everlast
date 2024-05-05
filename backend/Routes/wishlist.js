import express from 'express';

import Wishlist from '../Models/WishlistModel.js';

const router = express.Router();

// Wishlist Route
router.post('/', async (req, res) => {
    const result = await Wishlist.create(req.body);
    res.send(result);
});

router.delete('/:name', async (req, res) => {
    const result = await Wishlist.findOneAndDelete({ name: req.params.name });
    res.send(result);
});

router.get('/', async (req, res) => {
    const products = await Wishlist.find({ userId: req.params.id });
    res.send(products);
  });

  export default router;