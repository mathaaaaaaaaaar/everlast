import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import ProductListings from './components/ProductListing';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(oldCart => [...oldCart, product]);
  }

  const removeFromCart = (product) => {
    setCart(oldCart => oldCart.filter(item => item !== product));
    window.location.reload();
  }

  const clearCart = () => {
    setCart([]);
    window.location.reload();
  };

  return (

    <div className="App">
      <Header cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} />
      { <ProductListings addToCart={addToCart} removeFromCart={removeFromCart} /> }
    </div>
  );
}

export default App;
