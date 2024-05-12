import express from 'express';

import Product from '../Models/ProductModel.js';

const router = express.Router();

// Products Route
router.post('/', async (req, res) => {
    const result = await Product.insertMany(req.body);
    res.send(result);
  });

  router.put('/:name', async (req, res) => {
    const { wishlistCount, purchaseCount } = req.body;

    try {
        const product = await Product.findOne({ name: req.params.name });
        if (!product) {
            return res.status(404).send('Product not found');
        }

        product.wishlistCount = wishlistCount;
        product.purchaseCount = purchaseCount;

        await product.save();

        res.send(product);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
  });

  export default router;