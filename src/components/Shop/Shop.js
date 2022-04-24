import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const page = Math.ceil(count / 10);
                setPageCount(page);
            })
    }, [])

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
                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
            <div className="order-summary">
                <Cart key={cart._id} cart={cart}>
                    <Link to={'/order'}>
                        <button>Go Order Page</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;