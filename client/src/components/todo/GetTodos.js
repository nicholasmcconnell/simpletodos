import React, { useContext, useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import API from '../../utils/todoAPI';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import Card from '../layout/Card'
import ErrorNotice from '../misc/ErrorNotice';

export default function GetTodos() {
    const { userData } = useContext(UserContext);
    const [todoList, setTodoList] = useState([]);
    const [error, setError] = useState();
    // const [toggle, setToggle] = useEffect('');


    const history = useHistory();

    localStorage.setItem('lastVisited', 'gettodos');

    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    });

    useEffect(() => {
        API.getTodos(userData.token)
            .then(res => {
               setTodoList(res.data)
            })
            .catch(err =>
                (err.response.data.msg && setError(err.response.data.msg) && console.log(err))
            )
    }, [])

    const getTodos = async () => {
        console.log('in get todo function')
        try {
            await API.getTodos(userData.token)
                .then(res =>
                    setTodoList(res.data)
                )
                .catch(err =>
                    // console.log(err.response.data.msg)
                        (err.response.data.msg && setError(err.response.data.msg))
                )
        } catch (err) {
            console.log(err)
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
                        })
                })
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )
        } catch (err) {
            console.log(err)
        }
    }

    // const editToggle = (e) => {

    //     setToggle(e.target.value);

    //     console.log(e.target.value)

    // }

    return (
        <div className='page'>
            <div className='container'>
                <h2>Get Todo's</h2>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                {/* <button className='type-button' value='GetTodos' onClick={getTodos}>Fetch Todos</button> */}


                <div className='card-container'>
                    {todoList.length ? todoList.map(todo =>
                        <Card
                            id={todo._id}
                            todoList={todo}
                            key={todo._id}
                            deleteTodos={deleteTodos}
                            getTodos={getTodos}
                        // editToggle={editToggle}
                        />

                    ) : <p></p>}
                </div>
                <Link to='/'>
                    <button className='type-button' value='Home'>Home</button>
                </Link>
            </div>
        </div>
    )
}
