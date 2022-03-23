import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // console.log('loaded local storage first0');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log('local storage loaded1');
            })
    }, [])

    useEffect(() => {
        // console.log('local storage first line2');
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
        // console.log('local storage finished3');
    }, [products])

    const handleAddToCart = setProduct => {
        let newCart = [];
        const exist = cart.find(product => product.id === setProduct.id);
        if (!exist) {
            setProduct.quantity = 1;
            newCart = [...cart, setProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== setProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(setProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="order-summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;