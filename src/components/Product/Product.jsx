import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css';
import Cart from '../Cart/Cart';
const Product = ({ markToRead }) => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    // const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleToBookMark = (title) => {
        const newProducts = [...carts, title]
        setCarts(newProducts);
    }
    // const markToRead = (time) => {
    //     total = time + total;
    //     setTime(total)
    // }
    return (
        <div className='product-container'>
            <div>
                {
                    products.map(product => <Shop
                        key={product.id}
                        handleToBookMark={handleToBookMark}
                        markToRead={markToRead}
                        product={product}></Shop>)
                }
            </div>
            <div className='product'>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Product;