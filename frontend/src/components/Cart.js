import React from 'react';

import CartItem from './CartItem';

const Cart = ({cart, toggleCart, clearCart, removeFromCart}) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.map((product, index) => (
                <CartItem item={product} key={index} removeFromCart={removeFromCart} />
            ))}
            <div className="cart-buttons">
                <button className="cart-button" onClick={clearCart}>Clear Cart</button>
                <button className="cart-button" onClick={toggleCart}>Close Cart</button>
            </div>
        </div>
    );
};

export default Cart;

