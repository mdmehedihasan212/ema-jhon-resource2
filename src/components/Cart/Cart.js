import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <div className="summary-text">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
            </div>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;