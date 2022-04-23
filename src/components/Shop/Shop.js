import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const page = Math.ceil(count / 10);
                setPageCount(page);
            })
    }, [])


    useEffect(() => {
        // console.log('loaded local storage first0');
        fetch('http://localhost:5000/product')
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
            const addedProduct = products.find(product => product._id === id)
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
        const exist = cart.find(product => product._id === setProduct._id);
        if (!exist) {
            setProduct.quantity = 1;
            newCart = [...cart, setProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== setProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(setProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ' '}
                                onClick={() => setPage(number)}
                            >{number}</button>)
                    }
                </div>
            </div>
            <div className="order-summary">
                <Cart cart={cart}>
                    <Link to={'/order'}>
                        <button>Go Order Page</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;