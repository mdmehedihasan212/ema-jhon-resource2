import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, children }) => {
    // console.log();
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <div className="summary-text">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
            </div>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            {children}
        </div>
    );
};

export default Cart;