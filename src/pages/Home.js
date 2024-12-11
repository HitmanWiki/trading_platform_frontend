import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Trading Platform</h1>
            <p>Your gateway to automated trading.</p>
            <Link to="/login">
                <button>Login / Sign Up</button>
            </Link>
        </div>
    );
};

export default Home;
