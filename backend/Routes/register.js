import express from 'express';

import User from '../Models/UserModel';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();

    res.status(201).send("user registered successfully!");
});

export default router;