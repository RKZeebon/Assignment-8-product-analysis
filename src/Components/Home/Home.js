import React from 'react';
import './Home.css'
import image from '../../Assests/headphone.png'

const Home = () => {
    return (
        <div className='container'>
            <div className='header-container'>
                <div className='header-text'>
                    <h1 className='headding'>The headphone from <span> future</span></h1>
                    <h1 className='headding'>Your next <span>musical </span>friend</h1>
                    <p>This is the best headphone money can buy right now. You will be in love with it at glance. You are a gammer or a just music listener, it will fulfill your expectations. It has low latency mode for gaming. It has 10mm dynamic driver for clear sound.</p>
                    <button className='test-btn'>Ask For a Test</button>
                </div>
                <div className='header-image'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;