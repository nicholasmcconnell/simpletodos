import React, { useContext } from 'react'
import API from '../../utils/todoAPI';
import Axios from 'axios';
import UserContext from '../../context/UserContext';

export default function GetTodos() {
    const { userData } = useContext(UserContext);

    console.log('userdata', userData.token)

    const getTodos = async () => {
        try {
            const todoList = await Axios.get('api/todos/all',  {
                headers: {
                'x-auth-token': userData.token
              }
            });

            console.log('hi', todoList.data);
        } catch (err) {
            console.log(err);
        }
        // await API.getTodos()
        //     .then(res =>
        //         console.log(res.data)
        //     ).catch(err => console.log('hi', err))

    }
    return (
        <div className='page'>
            <div className='container'>
                <h2>Get Todo's</h2>
                <button className='type-button' value='GetTodos' onClick={getTodos}>Fetch Todos</button>
            </div>
        </div>
    )
}
