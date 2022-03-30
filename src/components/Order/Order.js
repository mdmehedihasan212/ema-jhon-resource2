import React from 'react';
import useProduct from '../../hooks/useProduct';

const Order = () => {
    const [products, setProducts] = useProduct();
    return (
        <div>
            <h1>Order Length: {products.length}</h1>
        </div>
    );
};

export default Order;