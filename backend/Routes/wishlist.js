import express from 'express';

import Wishlist from '../Models/WishlistModel';

const router = express.Router();

// Wishlist Route
router.post('/', async (req, res) => {
    const result = await Wishlist.create(req.body);
    res.send(result);
});

router.get('/', async (req, res) => {
    const products = await Wishlist.find({ userId: req.params.id });
    res.send(products);
  });

  export default router;