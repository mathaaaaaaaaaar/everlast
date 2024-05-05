import React, { useState } from 'react';

const ProductCard = ({ key, product, addToCart, removeFromCart, addToWL, removeFromWL }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [addedToWL, setAddedToWL] = useState(false);
    
    const handleATCClick = () => {
        addToCart(product);
        setAddedToCart(true);
    }

    const handleRemoveClick = () => {
        console.log("trying to remove " + product)
        removeFromCart(product);
        setAddedToCart(false);
    }

    const handleATWClick = () => {
        addToWL(product);
        setAddedToWL(true);
    }

    const handleRemoveWLClick = () => {
        console.log("trying to remove " + product)
        removeFromWL(product);
        setAddedToWL(false);
    }

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {addToCart ?
            <button
                onClick={addedToCart? handleRemoveClick : handleATCClick}
                className={addedToCart ? 'btn_prod_added' : 'btn_prod_addtocart'}
            >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            : null
            }
            {addToWL ?
            <button
                onClick={addedToWL? handleRemoveWLClick : handleATWClick}
                className={addedToWL ? 'btn_prod_added' : 'btn_prod_addtocart'}
            >
                {addedToWL ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
            : null
            }
        </div>
    );
};

export default ProductCard;
