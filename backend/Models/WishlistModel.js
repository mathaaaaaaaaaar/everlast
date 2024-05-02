import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
    listName: String,
    wishlist: Array
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema, "Wishlists");

export default Wishlist;