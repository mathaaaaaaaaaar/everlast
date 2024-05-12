import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    purchaseCount: Number,
    wishlistCount: Number
});

const Product = mongoose.model('Product', productSchema, 'Products');

export default Product;