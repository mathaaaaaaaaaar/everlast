import bcryptjs from 'bcryptjs';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !bcryptjs.compareSync(password, user.password)) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jsonwebtoken.sign({ userId: user._id }, 'my_secret_key');
    res.send({ token });
});

export default router;