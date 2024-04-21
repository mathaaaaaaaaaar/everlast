import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
