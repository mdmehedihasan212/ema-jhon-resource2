import React from 'react';
import './Order.css';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [cart, setCart] = useCart()
    const navigate = useNavigate();
    // console.log(cart);

    const removeProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        removeProduct={() => removeProduct(product)}
                    ></ReviewItem>)
                }
            </div>
            <div className="order-summary">
                <Cart
                    key={cart._id}
                    cart={cart}
                >
                    <button onClick={() => navigate('/shipping')}>Go Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;