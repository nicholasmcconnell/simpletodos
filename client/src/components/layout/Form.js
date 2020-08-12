import React from 'react'

export default function Form(props) {
    console.log(props)
    return (
        <>
            <form className='form' onSubmit={() => props.submit}>
                <label htmlFor='todo-title'>Title</label>
                <input
                    id='todo-title'
                    type='text'
                    onChange={e => props.setTitle(e.target.value)}
                />

                <label htmlFor='todo-youtubeurl'>YouTube Desktop Application URL</label>
                <input
                    id='todo-youtubeurl'
                    type='url'
                    onChange={e => props.setYouTubeUrl(e.target.value)}
                />

                <label htmlFor='todo-description'>Description</label>
                <textarea
                    id='todo-description'
                    name='todo-description'
                    onChange={e => props.setDescription(e.target.value)}
                />
                <div className='buttons-div'>
                    <input type='submit' value='Submit' />
                    <input type='reset' value='Clear' />
                </div>
            </form>
        </>
    )
}
