import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/order-review">Review</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user
                        ?
                        <Link to="/login" onClick={handleSignOut}>Sign out</Link>
                        :
                        <Link to="/login">Login</Link>
                }

            </div>
        </nav>
    );
};

export default Header;