import React from 'react';

import trashIcom from '../icons/trash.png';

const CartItem = ({ item, key, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <span className="test">{key}</span>
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
                <span className="quantity">{item.quantity}</span>
                <img className='icons remove-icon' src={trashIcom} onClick={() => removeFromCart(item)} alt="Remove Item" style={{ width: '32px', height: '32px' }} />
            </div>
        </div>
    );
};

export default CartItem;
