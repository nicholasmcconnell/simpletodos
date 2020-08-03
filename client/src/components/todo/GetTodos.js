import React, { useContext, useState } from 'react'
import API from '../../utils/todoAPI';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import Card from '../layout/Card'
import ErrorNotice from '../misc/ErrorNotice';

export default function GetTodos() {
    const { userData } = useContext(UserContext);
    const [todoList, setTodoList] = useState([]);
    const [error, setError] = useState();

    const getTodos = async () => {
        try {
            await API.getTodos(userData.token)
                .then(res =>
                    setTodoList(res.data)
                )
                .catch(err => console.log(err))

            console.log(todoList);

        } catch (err) {
            (err.response.data.msg && setError(err.response.data.msg))
        }
    }

    const deleteTodos = async (id) => {
        try {
            await API.deleteTodos(id)
                .then(
                    await API.getTodos(userData.token)
                        .then(res =>
                            setTodoList(res.data)
                        )
                        .catch(err => console.log(err))
                )


        } catch (err) {
            (err.response.data.msg && setError(err.response.data.msg))
        }
    }


    return (
        <div className='page'>
            <div className='container'>
                <h2>Get Todo's</h2>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <button className='type-button' value='GetTodos' onClick={getTodos}>Fetch Todos</button>


                <div className='card-container'>
                    {todoList.length ? todoList.map(todo =>
                        <Card
                            todoList={todo}
                            key={todo._id}
                            deleteTodos={deleteTodos}
                        />

                    ) : <p></p>}
                </div>
            </div>
    )
}
