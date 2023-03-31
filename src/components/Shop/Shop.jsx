import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Shop = (props) => {
    console.log(props)
    const { img, authorimg, name, date, title } = props.product;
    return (
        <div className='shop-container'>
            <img src={img} alt="" />
            <div className='writer'>
                <img src={authorimg} alt="" />
                <div className='bookmark'>
                    <div>
                        <p>{name}</p>
                        <p>{date}</p>
                    </div>

                    <div>
                        <p>: min read <FontAwesomeIcon icon={faBookmark} /></p>


                    </div>
                </div>


            </div>
            <h3>{title}</h3>
            <p>#beginners #programming</p>
            <a href="./Mark as read">Mark as read</a>
            <hr />
        </div>
    );
};

export default Shop;
/* 
{/* 
                <div>
                    <FontAwesomeIcon icon={faBookmark} />

                </div>

                <div>
                    <p>{name}</p>
                    <p>{date}</p> */