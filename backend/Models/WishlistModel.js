import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema, "Wishlists");

export default Wishlist;