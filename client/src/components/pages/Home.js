import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        console.log('in home.js useEffect')
        console.log(userData.user)
        if(!userData.user){
            history.push('/login')
        }

    });
    return (
        <div className='page'>
            Home
        </div>
    )
}

export default Home

