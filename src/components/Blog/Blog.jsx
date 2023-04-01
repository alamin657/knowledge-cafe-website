import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <h2 className='heading'>1.What is the difference props and state?</h2>
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
            <div>
                <h2 className='heading'>2.How does work useState?</h2>
                <h3>Ans:useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</h3>
            </div>
            <div>
                <h2 className='heading'>3.useEffect dataload without what else can  does?</h2>
                <ol>

                    <li>Event listeners: You can use useEffect to add event listeners to your components. For example, you can add an event listener to the window object to listen for a scroll event and update the state of your component accordingly.</li>
                    <li>Document title updates: You can use useEffect to update the document title when the component mounts or updates. This can be useful for SEO purposes or to provide additional information to users.</li>
                    <li>Animations: You can use useEffect to create animations in your component. For example, you can use useEffect to change the background color of an element when the component mounts or updates.</li>
                    <li>Clean-up functions: useEffect can also be used to perform clean-up actions when a component unmounts. For example, you can use useEffect to remove event listeners or clear timeouts or intervals.</li>
                </ol>
            </div>
            <div>
                <h2 className="heading">4.How does React work?</h2>
                <ol>
                    <li>Similar in Loop,Different in data.</li>
                    <li>State Alone Component</li>
                    <li>No pattern,but break down keep the work advantanges.</li>
                    <li>Many component one with keep in border.</li>
                </ol>
            </div>
        </div>
    );
};

export default Blog;