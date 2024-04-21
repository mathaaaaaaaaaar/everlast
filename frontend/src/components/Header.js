import React from 'react';

const Header = () => {

    return (
        <header className='store-header'>
            <div className="header-left-section">
                <button>Featured</button>
                <button>Promotions</button>
            </div>
            <div className="header-center-section">
                <h1>Everlast</h1>
            </div>
            <div className="header-right-section">
                <button>Log In</button>
                <button>Cart</button>
                <button>About</button>
            </div>
        </header>
    );
};

export default Header;
