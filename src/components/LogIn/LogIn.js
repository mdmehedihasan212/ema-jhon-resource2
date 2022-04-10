import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
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
                    <div className="google-login">

                        {/* <input type="submit" value="Continue with Google" /> */}
                        <button className='google-btn'>
                            <FcGoogle className='google-icon'></FcGoogle>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;