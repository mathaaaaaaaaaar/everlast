import './App.css';

import {
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductListings from './components/ProductListing';

function App() {
  const [cart, setCart] = useState([]);

  const [wishlists, setWishlists] = useState([]);

  const fetchWishlists = async () => {
      try {
          const response = await fetch('http://localhost:5555/wishlists');

          if (!response.ok) {
              throw new Error('HTTP error ' + response.status);
          }

          const data = await response.json();
          setWishlists(data);
      } catch (error) {
          console.error('Failed to fetch wishlists:', error);
      }
  };

  const fetchCart = async () => {
    try {
      const response = await fetch('http://localhost:5555/cart');
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5555/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      const data = await response.json();
      fetchCart();
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  }

  const removeFromCart = async (product) => {
    try {
      const response = await fetch(`http://localhost:5555/cart/${product.name}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const data = await response.json();
  
      // Assuming the API returns the updated cart
      fetchCart();
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
    window.location.reload();
  }

  const clearCart = () => {
    setCart([]);
    window.location.reload();
  };

  useEffect(() => {
    fetchCart();
    fetchWishlists();
  }, []);

  return (
    <div className="App">
      <Header cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} wishlists={wishlists} />
      {/* { <ProductListings addToCart={addToCart} removeFromCart={removeFromCart} /> } */}

      <Router>
        <Routes>
            <Route path="/products" element={<ProductListings addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route path='/about' element={<About />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
