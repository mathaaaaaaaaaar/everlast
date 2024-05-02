import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import ProductCard from './ProductCard';

const HomePage = () => {
    // Replace these with your actual products
    const featuredProducts = [{id: 1, name: 'Product 1'}, {id: 2, name: 'Product 2'}];
    const recommendedProducts = [{id: 3, name: 'Product 3'}, {id: 4, name: 'Product 4'}];

    return (
        <div className="home-page">
            <Carousel className='hero-carousel' autoPlay infiniteLoop>
                <div>
                    <img src="http://localhost:5555/images/store.png" alt="Slide 1" />
                </div>
                <div>
                    <img src="http://localhost:5555/images/coffee.png" alt="Slide 2" />
                </div>
                {/* Add more slides as needed */}
            </Carousel>

            <h2>Featured Products</h2>
            <div className="product-list">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <h2>Recommended Products</h2>
            <div className="product-list">
                {recommendedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;