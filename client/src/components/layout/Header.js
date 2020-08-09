import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
    const { userData } = useContext(UserContext);

    console.log(userData);

    return (
        <header id='header'>
            <Link to='/'>
            {
                userData.user ? <h1 className='title'>{userData.user.displayName}'s Todo's!</h1> : <h1 className='title'>Simple Todo's</h1>
            }
                {/* <h1 className='title'>{{userData} ? `${userData.user.displayName}'s Todo's!` : `Simple Todo's`}</h1> */}
            </Link>

            <AuthOptions />

        </header>
    )
}
