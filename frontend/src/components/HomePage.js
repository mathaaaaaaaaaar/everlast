import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import ProductCard from './ProductCard';

const HomePage = ({products}) => {
    const likedProducts = products.sort((a, b) => b.wishlistCount - a.wishlistCount).slice(0, 6);
    const mostPurchasedProducts = products.sort((a, b) => b.purchaseCount - a.purchaseCount).slice(0, 6);

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

            <h2>Most Wishlisted Products</h2>
            <div className="product-list">
                {likedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <h2>Most Purchased Products</h2>
            <div className="product-list">
                {mostPurchasedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;