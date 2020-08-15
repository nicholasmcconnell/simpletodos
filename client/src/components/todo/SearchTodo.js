import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory, Link } from 'react-router-dom';
import ErrorNotice from '../misc/ErrorNotice';
import API from '../../utils/todoAPI';
import Card from '../layout/Card';

export default function SearchTodos() {
    const [error, setError] = useState(undefined);
    const [todoList, setTodoList] = useState([]);
    const [todoSearch, setTodoSearch] = useState({
        search: undefined
    });

    const { userData } = useContext(UserContext);
    const history = useHistory();

    localStorage.setItem('lastVisited', 'searchtodos')


    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    });

    const submit = async (e) => {
        console.log(todoSearch.search)
        try {
            e.preventDefault();

            await API.searchTodos(todoSearch.search, userData.token)
                .then(res => {
                    setTodoList(res.data)
                    // console.log(res.data)
                    // console.log(todoList.length)
                    if (todoList.length > 1) {
                        setTodoList([]);
                        (setError('No matches!  Do you need more to-do....get it?'))
                    }
                })
        } catch (err) {
            console.log(err)
            err.response.data.msg && setError('No matches!  Do you need more to-do....get it?');
        }
    }

    const deleteTodos = async (id) => {
        try {
            await API.deleteTodos(userData.token, id)
                .then(async () => {
                    await API.getTodos(userData.token)
                        .then(res => {
                            setTodoList(res.data)
                        })
                        .catch(err => {
                            if (todoList.length >= 1) {
                                setTodoList([]);
                                (err.response.data.msg && setError(err.response.data.msg))
                            }

                            (err.response.data.msg && setError(err.response.data.msg))

                        })
                })
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )
        } catch (err) {
            console.log(err)
        }
    }

    const getTodos = async () => {
        try {
            await API.getTodos(userData.token)
                .then(res => {
                    setTodoList(res.data)
                })
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )
        } catch (err) {
            console.log(err)
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
                        onChange={e => setTodoSearch({ search: e.target.value })}
                    />
                    <div className='buttons-div'>
                        <input type='submit' value='Submit' />
                        <input type='reset' value='Clear'
                        // onClick={() => { setIntialStates();  window.location.reload(false); }}
                        />
                    </div>
                </form>

                {error && <ErrorNotice
                    message={error}
                    clearError={setError(undefined)}
                />}

                <div className='card-container'>
                    {todoList.length ? todoList.map(todo =>
                        <Card
                            id={todo._id}
                            todoList={todo}
                            key={todo._id}
                            deleteTodos={deleteTodos}
                            getTodos={getTodos}
                        />

                    ) :
                        <p></p>

                    }
                </div>
                <Link to='/'>
                    <button className='type-button' value='Home'>Home</button>
                </Link>
            </div>
        </div>
    )
}