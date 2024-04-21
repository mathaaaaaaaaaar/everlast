import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, removeFromCart }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    
    const handleATCClick = () => {
        addToCart(product);
        setAddedToCart(true);
    }

    const handleRemoveClick = () => {
        removeFromCart(product);
        setAddedToCart(false);
    }

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
                onClick={addedToCart? handleRemoveClick : handleATCClick}
                className={addedToCart ? 'btn_prod_added' : 'btn_prod_addtocart'}
            >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleATCClick}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
