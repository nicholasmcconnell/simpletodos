import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import API from '../../utils/todoAPI';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';

export default function Form({ todoList, setTodoSuccess, todoSuccess }) {

    const { _id, title, youTubeUrl, description } = todoList;

    const [titleUpdate, setTitleUpdate] = useState();
    const [youTubeUrlUpdate, setYouTubeUrlUpdate] = useState();
    const [descriptionUpdate, setDescriptionUpdate] = useState();
    const [error, setError] = useState();

    const { userData, userData: { user }, userData: { user: { displayName } }
    } = useContext(UserContext);

    const submit = async (e) => {
        e.preventDefault();
        try {

            const updateTodo = {
                title: !titleUpdate ? description : titleUpdate,
                youTubeUrl: !youTubeUrlUpdate ? youTubeUrl : youTubeUrlUpdate,
                description: !descriptionUpdate ? description : descriptionUpdate
            }

            await API.updateTodo(updateTodo, userData.token, _id)
                .then(res => setTodoSuccess(`Success, ${displayName}!  Your Todo has been saved.`))
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className='container'>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}

                {todoSuccess && (
                    <SuccessNotice message={todoSuccess} clearSuccess={() => {
                        setTodoSuccess(undefined);
                    }
                    } />
                )}
                <form className='form' onSubmit={submit}>
                    <label htmlFor='todo-title'>Title</label>
                    <input
                        id='todo-title'
                        type='text'
                        defaultValue={title}
                        onChange={e => setTitleUpdate(e.target.value)}
                    ></input>

                    <label htmlFor='todo-youtubeurl'>YouTube URL</label>
                    <input
                        id='todo-youtubeurl'
                        type='url'
                        defaultValue={youTubeUrl}
                        onChange={e => setYouTubeUrlUpdate(e.target.value)}
                    />

                    <label htmlFor='todo-description'>Description</label>
                    <textarea
                        id='todo-description'
                        name='todo-description'
                        defaultValue={description}
                        onChange={e => setDescriptionUpdate(e.target.value)}

                    />
                    <div className='buttons-div'>
                        <input type='submit' value='Submit' />
                        <input type='reset' value='Clear' />
                    </div>
                </form>
            </div>
        </>
    )
}
