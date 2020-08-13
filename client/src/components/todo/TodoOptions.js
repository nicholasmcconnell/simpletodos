import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory, Link } from 'react-router-dom';

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
                    <h2>Todo Options</h2>
                    <Link to='/gettodos'>
                        <button className='type-button' value='GetTodos'>Get Todo's</button>
                    </Link>
                    <Link to='/searchtodos'>
                        <button className='type-button' value='SearchTodos'>Search Todo's</button>
                    </Link>

                    <Link to='/createtodos'>
                        <button className='type-button' value='CreateTodos'>Create Todo</button>
                    </Link>
                </div>
            </div>
        </>
    )
}