import React from 'react'
{}
export default function Card(props) {
    //write a function that takes the id off a youtube URL and makes it a variable.
    //https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf ARTICLE WITH CODE FOR ABOVE FUNTING
    //set youtubelink to string then put it in source
    const youTubeString =`<iframe width="560" height="315" src="https://www.youtube.com/embed/hPq0fguAPBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    console.log(typeof youTubeString)
    // const youTubeStringTest = ""  "+ youTubeString + "'";
    return (
        <div className='card-body'>
            <h3 className='card-title'>{props.todoList.title}</h3>
            <p className='card-description'>{props.todoList.description}</p>
            {youTubeString}
        

        <div className='buttons-div'>
            <button className='todo-card-button'>Edit</button>
            <button className='todo-card-button' onClick={() => props.deleteTodos(props.todoList._id)}>Delete</button>
        </div>
        </div >
    )
}
