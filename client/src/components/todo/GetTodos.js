import React, { useContext, useState } from 'react'
import API from '../../utils/todoAPI';
import Axios from 'axios';
import UserContext from '../../context/UserContext';

export default function GetTodos() {
    const { userData } = useContext(UserContext);
    const [todoList, setTodoList] = useState([]);

    const getTodos = async () => {
        try {
            const res = await Axios.get('api/todos/all', {
                headers: {
                    'x-auth-token': userData.token
                }
            });

            setTodoList(res.data);
            console.log(todoList);

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='page'>
            <div className='container'>
                <h2>Get Todo's</h2>
                <button className='type-button' value='GetTodos' onClick={getTodos}>Fetch Todos</button>


                {todoList.length ? todoList.map(todo =>
                    <div>
                      
                        <p>title={todo.title}</p>
                        <p>Description={todo.description}</p>
                    </div>

                ) : <p></p>}


            </div>
        </div>
    )
}
