import React from 'react'
{ }
export default function Card(props) {

    const youTubeURL = props.todoList.youTubeUrl;
    const youTubeId = youTubeURL.split('=')[1];
    // const url = "https://www.youtube.com/embed/" + youTubeId;
    // console.log(url);

    // const youTubeId = 'hPq0fguAPBs';
    return (
        <div className='card-body'>
            <h3 className='card-title'>{props.todoList.title}</h3>
            <p className='card-description'>{props.todoList.description}</p>
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/${youTubeId}`}
                    frameBorder="0"
                />
            </div>


            <div className='buttons-div'>
                <button className='todo-card-button'>Edit</button>
                <button className='todo-card-button' onClick={() => props.deleteTodos(props.todoList._id)}>Delete</button>
            </div>
        </div >
    )
}
