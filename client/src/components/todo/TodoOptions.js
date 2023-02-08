import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory, Link } from 'react-router-dom';

import OptionButton from './OptionButton';

export default function TodoOptions() {
    const [error, setError] = useState();
    const [todoSearch, setTodoSearch] = useState();

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    });

    return (
        <>
            <div className='page'>
                <div className='container'>
                    <h2>Home</h2>
                    <Link to='/gettodos'>
                        <OptionButton className='type-button' value='GetTodos' name='Get Todos' />
                    </Link>
                    <Link to='/searchtodos'>
                        <OptionButton className='type-button' value='SearchTodos' name='Search' />
                    </Link>
                    <Link to='/createtodos'>
                        <OptionButton className='type-button' value='CreateTodos' name='Create Todo' />
                    </Link>
                </div>
            </div>
        </>
    )
}