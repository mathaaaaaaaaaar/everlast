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

  const [wishlist, setWishlist] = useState([]);

  const [products, setProducts] = useState([]);

  const fetchWishlists = async () => {
      try {
          const response = await fetch('http://localhost:5555/wishlist');

          if (!response.ok) {
              throw new Error('HTTP error ' + response.status);
          }

          const data = await response.json();
          setWishlist(data);
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
      product.purchaseCount += 1;
      updateProduct(product);
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

  const addToWL = async (product) => {
    try {
      product.wishlistCount += 1;
      updateProduct(product);
      const response = await fetch('http://localhost:5555/wishlist', {
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
      fetchWishlists();
    } catch (error) {
      console.error('Failed to add item to WL:', error);
    }
  };

  const updateProduct = async (product) => {
    const response = await fetch(`http://localhost:5555/products/${product.name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
    }

    const data = await response.json();
    // Handle the updated product
  };

  const removeFromWL = async (product) => {
    try {
      const response = await fetch(`http://localhost:5555/wishlist/${product.name}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const data = await response.json();
  
      // Assuming the API returns the updated cart
      fetchWishlists();
    } catch (error) {
      console.error('Failed to remove item from WL:', error);
    }
    window.location.reload();
  };

  const clearCart = () => {
    setCart([]);
    window.location.reload();
  };

  useEffect(() => {
    fetchCart();
    fetchWishlists();
    fetch('http://localhost:5555/products')
          .then(
            response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
          .then(data => {
            setProducts(data);
            console.log(data);
        })
          .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <Header cart={cart} wishlist={wishlist} clearCart={clearCart} removeFromCart={removeFromCart} />
      {/* { <ProductListings addToCart={addToCart} removeFromCart={removeFromCart} /> } */}

      <Router>
        <Routes>
            <Route path="/products" element={<ProductListings products={products} addToCart={addToCart} removeFromCart={removeFromCart} addToWL={addToWL} removeFromWL={removeFromWL} />} />
            <Route path='/about' element={<About />} />
            <Route path='/' element={<HomePage products={products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
