import React from 'react';
import './Home.css'
import image from '../../Assests/headphone.png'
import useReviews from '../Hooks/UseReviews';
import { useNavigate } from "react-router-dom"


const Home = () => {
    const [reviews] = useReviews()
    const topThreeReviews = reviews.slice(0, 3);
    const navigate = useNavigate()

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

            <div className='reviews-container'>
                <h1 className='reviews-heading'>Customer Reviews</h1>
                <div className='review-container'>
                    {
                        topThreeReviews.map(review => <ShowThreeReviews
                            key={review.id}
                            review={review}
                        ></ShowThreeReviews>)
                    }
                </div>
                <div className='reviews-btn'><button onClick={() => navigate('/reviews')}>See All Reviews</button></div>
            </div>

        </div >
    );
};

const ShowThreeReviews = (props) => {
    const { img, name, text, rating } = props.review
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Rating: {rating}</h4>
            <p>{text}</p>
        </div>

    )
}






export default Home;