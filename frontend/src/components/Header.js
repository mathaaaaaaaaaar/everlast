import React, { useState } from 'react';

import Cart from './Cart';

const Header = ({ cart, clearCart, removeFromCart }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    function toggleCart() {
        setIsCartOpen(oldState => !oldState);
    }

    return (
        <header className='store-header'>
            <div className="header-left-section">
                <button>Featured</button>
                <button>Promotions</button>
            </div>
            <div className="header-center-section">
                <h1>Everlast</h1>
            </div>
            <div className="header-right-section">
                <button>Log In</button>
                <button onClick={toggleCart}>Cart</button>
                {isCartOpen && (
                    <>
                        <div className="cart-backdrop" onClick={toggleCart}></div>
                        <Cart cart={cart} toggleCart={toggleCart} clearCart={clearCart} removeFromCart={removeFromCart} />
                    </>
                )}
                <button>About</button>
            </div>
        </header>
    );
};

export default Header;
