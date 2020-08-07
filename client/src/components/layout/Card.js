import React from 'react'

export default function Card(props) {
    //set youtubelink to string then put it in source
    return (
        <div className='card-body'>
            <h3 className='card-title'>{props.todoList.title}</h3>
            <p className='card-description'>{props.todoList.description}</p>
            <iframe className='card-youtube' width="420" height="315"
                src={props.todoList.youTubeUrl}>
            </iframe>
            <div className='buttons-div'>
                <button className='todo-card-button'>Edit</button>
                <button className='todo-card-button' onClick={() => props.deleteTodos(props.todoList._id)}>Delete</button>
            </div>
        </div>
    )
}
