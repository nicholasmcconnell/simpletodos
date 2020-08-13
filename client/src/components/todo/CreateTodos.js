import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import API from '../../utils/todoAPI';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';
// import SuccessContext from '../../context/SuccessContext';
import Form from '../layout/UpdateForm';
import Card from '../../components/layout/Card';

export default function CreateTodos() {

    const [title, setTitle] = useState('');
    const [youTubeUrl, setYouTubeUrl] = useState();
    const [description, setDescription] = useState();
    const [error, setError] = useState();
    const [todoSuccess, setTodoSuccess] = useState();

    const { userData } = useContext(UserContext);
    const history = useHistory();

    localStorage.setItem('lastVisited', 'createtodos');

    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    }, []);

    const setIntialStates = () => {
        // Send initial state as prop to error and success
        setTodoSuccess(undefined);
        setError(undefined)
        setTitle(undefined);
        setYouTubeUrl(undefined);
        setDescription(undefined);

    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            const newTodo = { title, youTubeUrl, description }

            await API.createTodos(newTodo, userData.token)
                .then(res => setTodoSuccess(`Success, ${userData.user.displayName}!  Your Todo has been saved.`))
                // .then API.get
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )

        } catch (err) {
            console.log("Something when wrong")
        }
        // setIntialStates();
    }

    return (
        <div className='page'>
            <div className='container'>
                <h2>CreateTodos</h2>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}

                {todoSuccess && (
                    <SuccessNotice message={todoSuccess} clearSuccess={() => {
                        setTodoSuccess(undefined);
                        // setTitle('');
                    }
                    } />
                )}

                {/* <Form
                    onSubmit={submit.bind()}
                    // setTitle={() => setTitle}
                    // setYouTubeUrl={setYouTubeUrl}
                    // setDescription={setDescription}

                /> */}

                <form className='form' onSubmit={submit}>
                    <label htmlFor='todo-title'>Title</label>
                    <input
                        id='todo-title'
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                    />

                    <label htmlFor='todo-youtubeurl'>YouTube Desktop Application URL</label>
                    <input
                        id='todo-youtubeurl'
                        type='url'
                        onChange={e => setYouTubeUrl(e.target.value)}
                    />

                    <label htmlFor='todo-description'>Description</label>
                    <textarea
                        id='todo-description'
                        name='todo-description'
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div className='buttons-div'>
                        <input type='submit' value='Submit'/>
                        <input type='reset' value='Clear' />
                    </div>
                </form>
                <button className='type-button' onClick={() => { history.push('/'); setTodoSuccess(undefined); }} value='Home'>Home</button>

            </div>
        </div>
    )
}
