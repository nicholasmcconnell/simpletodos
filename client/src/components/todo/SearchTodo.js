import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory, Link } from 'react-router-dom';
import ErrorNotice from '../misc/ErrorNotice';

export default function SearchTodos() {
    const [error, setError] = useState();
    const [todoSearch, setTodoSearch] = useState();

    const { userData } = useContext(UserContext);
    const history = useHistory();

    localStorage.setItem('lastVisited', 'searchtodos')


    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    });

    const submit = async (e) => {
        try {
            e.preventDefault();

        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

    }
    return (

        <div className='page'>
            <div className='container'>

                <h2>Search Todos</h2>

                <form className='form' onSubmit={submit}>
                    <label htmlFor='search-term'>Search:</label>
                    <input
                        id='todo-search'
                        type='text'
                        placeholder='Search your todos'
                        onChange={e => setTodoSearch(e.target.value)}
                    />

                    <input type='submit' value='Search' />
                </form>
                <Link to='/'>
                    <button className='type-button' value='Home'>Home</button>
                </Link>
            </div>
        </div>
    )
}