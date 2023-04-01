import React from 'react';
import './Cart.css';
const Cart = ({ carts, time }) => {
    return (
        <div>
            <h4>Spent time on read:{time} min</h4>
            <p className='bookmark'>Bookmarks Blogs:{carts.length}</p>
            <div>
                {
                    carts.map(cart => {
                        return <div>
                            <p >{cart}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Cart;

