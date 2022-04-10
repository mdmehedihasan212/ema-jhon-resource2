import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './SignUp.css';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/inventory')
    }

    const handleSubmitReload = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password don't match")
            console.log('did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password should at least six character')
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then(result => {
                sendEmailVerification(auth.currentUser)
                const user = result?.user;
                console.log(user);
            })
            .catch(error => {
                setError(error)
            })
    }


    return (
        <div className='signup-form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleSubmitReload}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required />
                    </div>
                    <p className='error-text'>{error}</p>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                    <p className='form-text'>Already have an account? <Link className='form-link' to={'/login'}>Login
                    </Link></p>
                    <div className="signup-div">
                        <button className='signup-btn'>
                            <FcGoogle className='google-icon'></FcGoogle>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;