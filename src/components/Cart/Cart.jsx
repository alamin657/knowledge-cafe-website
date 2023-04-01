import React from 'react';
import './Cart.css';
const Cart = ({ carts, total }) => {
    return (
        <div>
            <h4>Spent time on read:{total}</h4>
            <h2>Bookmarks Blogs:{carts.length}</h2>
            {
                carts.map(cart => {
                    return <div>
                        <p>{cart}</p>
                    </div>
                })
            }


        </div>
    );
};

export default Cart;

