import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

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

    const submit = async (e) => {
        try {
            e.preventDefault();
            
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

    }
    return (
        <div className='page'>
            <button>New Todo</button>
            <button>Get Todo's</button>
            <form className='form' onSubmit={submit}>
                <input
                id='todo-search'
                type='search'
                placeholder='Search your todos'
                onChange={e => setTodoSearch(e.target.value)}></input>
            </form>
        </div>
    )
}