import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='questions'>
            <div className='qna'>
                <h1 className='question'>Q1. What is context API?</h1>
                <p className='ans'>A. Context API is a method of react to pass data or state among react app without prop drilling. It is a alternative to prop drilling. It can easily pass data from grand parent to child without bothering parent, and so on.</p>
            </div>
            <div className='qna'>
                <h1 className='question'>Q2. What is semantic tag?</h1>
                <p className='ans'>A. Semantic tag means a meaningfull tag for both developer and the browser. This was introduced in HTML5. Example of some semantic tags: <strong>em, article, blockquote, section, nav, aside, strong </strong>etc. </p>
            </div>
        </div>
    );
};

export default Blogs;