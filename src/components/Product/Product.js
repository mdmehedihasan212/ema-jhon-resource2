import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    // console.log(product);
    const { img, name, ratings, seller, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;