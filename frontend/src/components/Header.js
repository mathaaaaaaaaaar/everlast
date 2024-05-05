import React, { useState } from 'react';

import Cart from './Cart';
import WishlistModal from './WishlistModal';

const Header = ({ cart, wishlist, clearCart, removeFromCart }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWLOepn, setIsWLOpen] = useState(false);

    function toggleCart() {
        setIsCartOpen(oldState => !oldState);
    }

    function toggleWL() {
        setIsWLOpen(oldState => !oldState);
    }

    return (
        <header className='store-header'>
            <a className="header-left-section" href='/products'>
                <button>Products</button>
            </a>
            <a className="header-center-section" href='/'>
                <h1>Everlast</h1>
            </a>
            <div className="header-right-section">
                <button>Log In</button>
                <button onClick={toggleWL}>Wishlist</button>
                {isWLOepn && (
                    <>
                        <div className="cart-backdrop" onClick={toggleWL}></div>
                        <WishlistModal wishlist={wishlist} toggleWL={toggleWL} />
                    </>
                )}
                <button onClick={toggleCart}>Cart</button>
                {isCartOpen && (
                    <>
                        <div className="cart-backdrop" onClick={toggleCart}></div>
                        <Cart cart={cart} toggleCart={toggleCart} clearCart={clearCart} removeFromCart={removeFromCart} />
                    </>
                )}
                <a href='/about'>
                    <button>About</button>
                </a>
            </div>
        </header>
    );
};

export default Header;
