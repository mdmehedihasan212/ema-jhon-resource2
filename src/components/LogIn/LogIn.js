import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                    <p>New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account
                    </Link></p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;