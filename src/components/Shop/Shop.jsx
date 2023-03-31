import React from 'react';
import './Shop.css';
const Shop = (props) => {
    console.log(props)
    const { img } = props.product;
    return (
        <div className='shop-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default Shop;