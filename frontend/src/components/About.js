import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <h1 className="about-title">About Everlast</h1>
            <p className="about-text">
                Everlast is a leading e-commerce platform that offers a wide range of products.
                We are committed to providing our customers with the best online shopping experience.
            </p>
            <img className="about-image" src="http://localhost:5555/images/about.png" alt="About Everlast" />
            <div className="about-details">
                <h2 className="about-subtitle">Our Mission</h2>
                <p className="about-text">
                    Our mission is to empower consumers with the ability to purchase anything they want, at any time, from anywhere.
                </p>
                <h2 className="about-subtitle">Our Vision</h2>
                <p className="about-text">
                    Our vision is to become the world's most customer-centric company, where customers can find, discover, and buy anything they want online.
                </p>
            </div>
        </div>
    );
};

export default About;
