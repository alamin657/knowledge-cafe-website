import React from 'react';
import './Cart.css';
const Cart = ({ carts, time }) => {
    return (
        <div>
            <div className="md:flex">
                <h4 >Spent time on read:{time} min</h4>
                <p >Bookmarks Blogs:{carts.length}</p>
            </div>
            <div className='cart'>
                {
                    carts.map(cart => {
                        return <div>
                            <p className='title'>{cart}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Cart;

