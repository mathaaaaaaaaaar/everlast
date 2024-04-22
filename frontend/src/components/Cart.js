import React from 'react';

import crossIcon from '../icons/cross.png';
import CartItem from './CartItem';

const Cart = ({cart, toggleCart, clearCart, removeFromCart}) => {
    return (
        <div className="cart">
            <div className='cart-header'>
                <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
                <h2>Cart</h2>
                <img className="close-cart-button" onClick={toggleCart} src={crossIcon} alt="Cross Icon" style={{ width: '24px', height: '24px' }} />
            </div>
            {cart.map((product, index) => (
                <CartItem item={product} key={index} removeFromCart={removeFromCart} />
            ))}
        </div>
    );
};

export default Cart;

