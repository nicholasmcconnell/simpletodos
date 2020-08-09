import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import TodoOptions from '../todo/TodoOptions';

function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
     
        localStorage.setItem('lastVisited', '');

        if (!userData.user) {
            history.push('/login')
        }

    });
    return (
        <>
            <TodoOptions />
        </>
    )
}

export default Home

