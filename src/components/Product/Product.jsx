import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // const handleToBookMark = (watchTime) => {
    //     console.log(watchTime)

    // }
    const handleToBookMark = () => {
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='product-container'>
            <div>
                {
                    products.map(product => <Shop
                        key={product.id}
                        handleToBookMark={handleToBookMark}
                        product={product}></Shop>)
                }
            </div>
            <div className='product'>
                <h4>Spent time on read:</h4>
                <h2>Bookmarks Blogs:{cart.length}</h2>
            </div>
        </div>
    );
};

export default Product;