import React from 'react';
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
                </form>
            </div>
        </div>
    );
};

export default LogIn;