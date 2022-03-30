import React from 'react';

const ReviewItem = ({ product }) => {
    console.log(product);
    const { name, img, price, shipping, quantity } = product;
    return (
        <div>
            <p>ReviewItem Name: {name}</p>
        </div>
    );
};

export default ReviewItem;