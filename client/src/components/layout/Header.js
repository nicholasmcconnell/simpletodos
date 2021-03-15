import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
    const { userData: { user } } = useContext(UserContext);

    return (
        <header id='header'>
            <Link to='/'>
                {
                    user ? <h1 className='title'>{user.displayName}'s Todos!</h1> : <h1 className='title'>Simple Todos!</h1>
                }
            </Link>

            <AuthOptions />

        </header>
    )
}
