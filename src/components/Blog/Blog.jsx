import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <h2 className='heading'>What is the difference props and state?</h2>
            <h3 className='heading-two'>Props</h3>
            <p className='paragraph'>Ans:
                <ol>
                    <li>The Data is passed from one component to another.
                    </li>
                    <li>  It is Immutable</li>
                    <li> Props can be used with state and functional components.</li>
                    <li>Props are read-only.</li>
                </ol>
            </p>
            <h3 className='heading-two'>State</h3>
            <p className='paragraph'>Ans:
                <ol>
                    <li>The Data is passed within the component only.</li>
                    <li>It  is Mutable</li>
                    <li>State can be used only with the state components/class component </li>
                    <li>State is both read and write.</li>
                </ol>
            </p>
        </div>
    );
};

export default Blog;