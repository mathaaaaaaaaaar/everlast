import ProductCard from './ProductCard';

const ProductListings = ({ products, addToCart, removeFromCart, addToWL, removeFromWL }) => {

    return (
        <div className="product-listings">
            {products.map(product => (
                <ProductCard product={product} addToCart={addToCart} removeFromCart={removeFromCart} addToWL={addToWL} removeFromWL={removeFromWL} />
            ))}
        </div>
    );
};

export default ProductListings;
