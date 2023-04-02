import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleToBookMark = (title) => {
        const bookMark = carts.find(cart => cart === title);
        if (!bookMark) {
            setCarts([...carts, title]);
        }
        else {
            toast('emaging!');
        }
    }
    const markToRead = (watchTime) => {
        const totalTime = time + watchTime;
        setTime(totalTime);

    }
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
                <Cart carts={carts}
                    time={time}
                ></Cart>

            </div>
        </div>
    );
};

export default Product;