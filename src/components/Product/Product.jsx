import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css';
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='product-container'>
            <div>
                {
                    products.map(product => <Shop
                        key={product.id}
                        product={product}></Shop>)
                }
            </div>
            <div className='product'>
                <h4>Spent time on read:</h4>
            </div>
        </div>
    );
};

export default Product;