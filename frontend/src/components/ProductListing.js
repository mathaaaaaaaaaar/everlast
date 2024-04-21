import {
  useEffect,
  useState,
} from 'react';

import ProductCard from './ProductCard';

const ProductListings = ({ addToCart, removeFromCart }) => {
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
          .then(data => setProducts(data))
          .catch(error => console.error('Error:', error));
      }, []);

    return (
        <div className="product-listings">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
        </div>
    );
};

export default ProductListings;
