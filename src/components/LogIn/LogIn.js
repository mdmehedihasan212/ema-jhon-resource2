import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../Firebase/firebase.init';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmitReload = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='login-form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleSubmitReload}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <p className='error-text'>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <input className='submit-btn' type="submit" value="Login" />
                    <p className='form-text'>New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account
                    </Link></p>
                    <div className="login-div">
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