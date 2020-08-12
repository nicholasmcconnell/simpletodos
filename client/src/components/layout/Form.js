import React from 'react'

export default function Form(props) {

    const { title, youTubeUrl, description } = props.props.todoList;

    console.log('in forms', title, youTubeUrl, description )
    return (
        <>
        {console.log(typeof title)}
            <form className='form' onSubmit={() => props.submit}>
                <label htmlFor='todo-title'>Title</label>
                <input
                    id='todo-title'
                    type='text'
                    value={title}
                    // onChange={e => props.setTitle(e.target.value)}
                ></input>

                <label htmlFor='todo-youtubeurl'>YouTube Desktop Application URL</label>
                <input
                    id='todo-youtubeurl'
                    type='url'
                    value={youTubeUrl}
                    // onChange={e => props.setYouTubeUrl(e.target.value)}
                />

                <label htmlFor='todo-description'>Description</label>
                <textarea
                    id='todo-description'
                    name='todo-description'
                    value='description'
                    // onChange={e => props.setDescription(e.target.value)}
                />
                <div className='buttons-div'>
                    <input type='submit' value='Submit' />
                    <input type='reset' value='Clear' />
                </div>
            </form>
        </>
    )
}
