import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';

export default function CreateTodos() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [youTubeUrl, setYouTubeUrl] = useState('');

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    });
    // form - 1. title, 2. description, 3. youtube link,
    // 

    return (
        <div className='page'>
            <div className='container'>
                <h2>CreateTodos</h2>
                <form className='form' onSubmit={submit}>
                    <label htmlFor='todo-title'>Title</label>
                    <input
                        id='todo-title'
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                    />

                    <label htmlFor='todo-description'>Description</label>
                    <textarea
                        id='todo-description'
                        name='todo-description'
                        onChange={e => setDescription(e.target.value)}
                    />

                    <label htmlFor='todo-youtubeurl'></label>
                    <input
                        id='todo-youtubeurl'
                        type='url'
                        onChange={e => setYouTubeUrl(e.target.value)}
                    />

                    <input type='submit' value='todo-form' />
                </form>
                <Link to='/'>
                    <button className='type-button' value='Home'>Home</button>
                </Link>
            </div>
        </div>
    )
}
