import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products)
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="order-summary">
                <Cart
                    key={cart.id}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;