// WishlistModal.js
import React from 'react';

import crossIcon from '../icons/cross.png';
import ProductListings from './ProductListing';

const WishlistModal = ({ wishlist, toggleWL }) => {
    return (
        <div className="wishlist-modal">
            <div className='cart-header'>
                <h2>Your Wishlist</h2>
                <img className="close-cart-button" onClick={toggleWL} src={crossIcon} alt="Cross Icon" style={{ width: '24px', height: '24px' }} />
            </div>
            <ProductListings products={wishlist} />
        </div>
    );
};

export default WishlistModal;