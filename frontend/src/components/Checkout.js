import React from 'react';

import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

function CheckoutModal({ isOpen, onRequestClose, cartItems }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Checkout"
    >
        <h2>Checkout</h2>
        {cartItems.map((item, index) => (
            <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
        </div>
        ))}
        <h2>Fill Out Your Shipping Info: </h2>
        <form className='checkout-form'>
        <label>
            Full Name:
            <input type="text" name="fullName" required />
        </label>
        <label>
            Email:
            <input type="email" name="email" required />
        </label>
        <label>
            Phone Number:
            <input type="tel" name="phoneNumber" required />
        </label>
        <label className='shipping-address'>
            Shipping Address:
            <input type="text" name="addressLine1" placeholder="Address Line 1" required />
            <input type="text" name="addressLine2" placeholder="Address Line 2" />
            <input type="text" name="city" placeholder="City" required />
            <input type="text" name="state" placeholder="State/Province" required />
            <input type="text" name="zipCode" placeholder="ZIP Code" required />
            <input type="text" name="country" placeholder="Country" required />
        </label>
        <label>
            Payment Method:
            <select name="paymentMethod" required>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            </select>
        </label>
        <button type="submit">Confirm Order</button>
    </form>
    </Modal>
  );
}

export default CheckoutModal;