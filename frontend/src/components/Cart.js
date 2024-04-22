import React, { useState } from 'react';

import crossIcon from '../icons/cross.png';
import CartItem from './CartItem';
import CheckoutModal from './Checkout';

const Cart = ({cart, toggleCart, clearCart, removeFromCart}) => {

    const [isCheckoutOpen, setCheckoutOpen] = useState(false);

    if (!cart) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cart">
            <div className='cart-header'>
                <h2>Cart</h2>
                <img className="close-cart-button" onClick={toggleCart} src={crossIcon} alt="Cross Icon" style={{ width: '24px', height: '24px' }} />
            </div>
            {cart.map((product, index) => (
                <CartItem item={product} removeFromCart={removeFromCart} />
            ))}
            <button onClick={() => setCheckoutOpen(true)}>Checkout</button>
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onRequestClose={() => setCheckoutOpen(false)}
                cartItems = {cart}
            />
        </div>
    );
};

export default Cart;

