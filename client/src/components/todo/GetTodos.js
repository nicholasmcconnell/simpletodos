import React from 'react'
import API from '../../utils/todoAPI';

export default function GetTodos() {

    const getTodos = () => {
        API.getTodos()
            .then(res =>
                console.log(res.data)
            ).catch(err => console.log('hi', err))


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
