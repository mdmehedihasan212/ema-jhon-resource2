import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products)
    // console.log(cart);

    const removeProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeProduct={() => removeProduct(product)}
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