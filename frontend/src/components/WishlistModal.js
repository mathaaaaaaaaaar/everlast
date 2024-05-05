// WishlistModal.js
import React from 'react';

import crossIcon from '../icons/cross.png';

const WishlistModal = ({ wishlist, toggleWL }) => {
    return (
        <div className="wishlist-modal">
                <div>
                    <div className='cart-header'>
                        <h2>Your Wishlist</h2>
                        <img className="close-cart-button" onClick={toggleWL} src={crossIcon} alt="Cross Icon" style={{ width: '24px', height: '24px' }} />
                    </div>
                    {wishlist && wishlist.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
        </div>
    );
};

export default WishlistModal;