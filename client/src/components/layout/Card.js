import React from 'react'

export default function Card(props) {
    return (
        <div className='card-body'>
            <h3 className='card-title'>{props.todoList.title}</h3>
            <p className='card-description'>{props.todoList.description}</p>
            {/* <iframe className='card-youtube' width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
            </iframe> */}
            <button className='delete-button' onClick={() => props.deleteTodos(props.todoList._id)}>Delete</button>
        </div>
    )
}
