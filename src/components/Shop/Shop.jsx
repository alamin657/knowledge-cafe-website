import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Shop = (props) => {
    console.log(props)
    const { img, authorimg, name, date, title, time } = props.product;
    const handleToBookMark = props.handleToBookMark;
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
                        <p>{time}:min read  <FontAwesomeIcon onClick={() => handleToBookMark(props.product)} icon={faBookmark} /></p>
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
