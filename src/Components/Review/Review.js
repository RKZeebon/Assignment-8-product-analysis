import React from 'react';
import './Review.css'
const Review = (props) => {
    const { img, name, text, rating } = props.review;
    return (
        <div className='all-review'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Rating: {rating}</h4>
            <p>{text}</p>
        </div>
    );
};

export default Review;