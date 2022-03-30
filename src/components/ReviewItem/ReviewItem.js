import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, removeProduct }) => {
    // console.log(product);
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-item-details">
                    <p className="review-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping Charge: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button className="delete-button" onClick={removeProduct}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;