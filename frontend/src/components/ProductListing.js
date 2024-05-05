import {
  useEffect,
  useState,
} from 'react';

import ProductCard from './ProductCard';

const ProductListings = ({ addToCart, removeFromCart, addToWL, removeFromWL }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5555/products')
          .then(
            response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log(response);
                return response.json();
            })
          .then(data => {
            setProducts(data);
        })
          .catch(error => console.error('Error:', error));
      }, []);

    return (
        <div className="product-listings">
            {products.map(product => (
                <ProductCard product={product} addToCart={addToCart} removeFromCart={removeFromCart} addToWL={addToWL} removeFromWL={removeFromWL} />
            ))}
        </div>
    );
};

export default ProductListings;
