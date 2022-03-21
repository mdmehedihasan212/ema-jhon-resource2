import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="summary-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;