import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='blog-first'>
                <h2 className='heading'>1.What is the difference props and state?</h2>
                <h3 className='heading-two'>Props</h3>
                <p className='paragraph'>Ans:

                    <p>The Data is passed from one component to another.
                    </p>
                    <p>  It is Immutable</p>
                    <p> Props can be used with state and functional components.</p>
                    <p>Props are read-only.</p>

                </p>
                <h3 className='heading-two'>State</h3>
                <p className='paragraph'>Ans:

                    <p>The Data is passed within the component only.</p>
                    <p>It  is Mutable</p>
                    <p>State can be used only with the state components/class component </p>
                    <p>State is both read and write.</p>

                </p>
            </div>
            <div className='blog-first'>
                <h2>2.How does work useState?</h2>
                <p>Ans:useState is React Hook that allows you to add state to a functional component. <br /> It returns an array with two values: the current state and a function to update it. <br /> The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className='blog-first'>
                <h2>3.useEffect dataload without what else can  does?</h2>


                <p>Event psteners: You can use useEffect to add event psteners to your components. <br /> For example, you can add an event pstener to the window object to psten for a scroll event and update the state of your component accordingly.</p>
                <p>Document title updates: You can use useEffect to update the document title when the component mounts or updates. <br /> This can be useful for SEO purposes or to provide additional information to users.</p>
                <p>Animations: You can use useEffect to create animations in your component. <br /> For example, you can use useEffect to change the background color of an element when the component mounts or updates.</p>
                <p>Clean-up functions: useEffect can also be used to perform clean-up actions when a component unmounts. <br /> For example, you can use useEffect to remove event psteners or clear timeouts or intervals.</p>

            </div>
            <div className='blog-first'>
                <h2>4.How does React work?</h2>

                <p>Similar in Loop,Different in data.</p>
                <p>State Alone Component</p>
                <p>No pattern,but break down keep the work advantanges.</p>
                <p>Many component one with keep in border.</p>

            </div>
        </div>
    );
};

export default Blog;