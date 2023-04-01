import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Shop = ({ markToRead, handleToBookMark, product }) => {
    // console.log(props)
    const { img, authorimg, name, date, title, time } = product;
    // const handleToBookMark = props.handleToBookMark;

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
                        <p>{time}:min read  <FontAwesomeIcon onClick={() => handleToBookMark(title)} icon={faBookmark} /></p>
                    </div>
                </div>


            </div>
            <h3>{title}</h3>
            <p>#beginners #programming</p>
            <button onClick={() => markToRead(time)} style={{ color: 'red' }}>Mark as read</button>
            <hr />
        </div>
    );
};

export default Shop;
