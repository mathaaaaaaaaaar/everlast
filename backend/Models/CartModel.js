import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const Cart = mongoose.model('Cart', cartSchema, 'Cart');

export default Cart;