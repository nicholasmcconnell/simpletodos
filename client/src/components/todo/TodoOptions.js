import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import ErrorNotice from '../misc/ErrorNotice';
// import CreateTodos from './CreateTodos';
// import GetTodos from './GetTodos';
// import SearchTodos from './SearchTodo';

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

    const createtodos = () => history.push('/createtodos');
    const gettodos = () => history.push('/gettodos');
    const searchtodos = () => history.push('/searchtodos');

    const submit = async (e) => {
        try {
            e.preventDefault();

        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

    }
    return (
        <>

            <div className='page'>
                <h2>Todo Options</h2>

                <div className='container'>

                    <button className='type-button' value='GetTodos' onClick={gettodos}>Get Todo's</button>
                    <button className='type-button' value='SearchTodos' onClick={searchtodos}>Search Todo's</button>
                    <button className='type-button' value='CreateTodos' onClick={createtodos}>Create Todo</button>
                </div>

            </div>
        </>
    )
}