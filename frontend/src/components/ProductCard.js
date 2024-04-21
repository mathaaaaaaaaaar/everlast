import React from 'react';

const ProductCard = ({ product }) => {
    const addToCart = () => {
        // Add logic to add the product to the cart
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
