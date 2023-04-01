import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css';
import Cart from '../Cart/Cart';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [time, setTime] = useState(0);
    // console.log(time);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleToBookMark = (title) => {
        const filterCart = carts.filter(cart => cart === title)
        // console.log( cart.title)
        if (filterCart.length === 0) {
            const newProducts = [...carts, title]
            setCarts(newProducts);

        }
        else {
            console.log('alert')
        }


    }
    const markToRead = (watchTime) => {
        // console.log(watchTime)
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