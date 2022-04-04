import React from 'react';
import image from '../../Assests/404.jpg'
import './NotFound.css'

const NotFound = () => {

    return (
        <div className='four0four'>
            <img src={image} alt="" />
            <h1>Page Not Found</h1>

        </div>
    );
};

export default NotFound;