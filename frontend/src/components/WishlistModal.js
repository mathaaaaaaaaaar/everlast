// WishlistModal.js
import React, { useState } from 'react';

import crossIcon from '../icons/cross.png';

const WishlistModal = ({ wishlists, toggleWL }) => {
    const [selectedWishlist, setSelectedWishlist] = useState(null);

    const handleWishlistClick = (wishlist) => {
        setSelectedWishlist(wishlist);
    };

    const handleBackClick = () => {
        setSelectedWishlist(null);
    };

    return (
        <div className="wishlist-modal">
            {selectedWishlist === null ? (
                <div>
                    <div className='cart-header'>
                        <h2>Select a Wishlist</h2>
                        <img className="close-cart-button" onClick={toggleWL} src={crossIcon} alt="Cross Icon" style={{ width: '24px', height: '24px' }} />
                    </div>
                    {wishlists.map((wishlist) => (
                        <button key={wishlist.id} onClick={() => handleWishlistClick(wishlist)}>
                            {wishlist.listName}
                        </button>
                    ))}
                </div>
            ) : (
                <div>
                    <button onClick={handleBackClick}>Back</button>
                    <h2>{selectedWishlist.listName}</h2>
                    {selectedWishlist.wishlist.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistModal;