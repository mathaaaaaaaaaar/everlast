import React, {
  useEffect,
  useState,
} from 'react';

import ProductCard from './ProductCard';

const ProductListings = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5555/products')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, []);

    return (
        <div className="product-listings">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductListings;
