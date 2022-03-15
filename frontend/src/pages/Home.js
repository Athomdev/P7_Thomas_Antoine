import React from 'react';
import Actualités from '../components/Actualités';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation />
            <Actualités />
            
        </div>
    );
};

export default Home;