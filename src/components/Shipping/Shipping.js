import React, { useState } from 'react';
import './Shipping.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Shipping = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');
    const [error, setError] = useState('');

    const [user] = useAuthState(auth)

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCurrentAddressBlur = event => {
        setCurrentAddress(event.target.value)
    }

    const handleSubmitReload = event => {
        event.preventDefault();

    }


    return (
        <div className='signup-form-container'>
            <div>
                <h1 className='form-title'>Shipping Form</h1>
                <form className='form-container' onSubmit={handleSubmitReload}>
                    <div className="input-group">
                        <label htmlFor="text">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="Email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Current Address</label>
                        <input onBlur={handleCurrentAddressBlur} type="text" name="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="phone" name="phone" required />
                    </div>
                    <p className='error-text'>{error}</p>
                    <input className='shipping-btn' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;