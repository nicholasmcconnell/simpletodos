import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import API from '../../utils/todoAPI';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';

export default function Form(props) {

    console.log('updateform', props)

    const { _id, title, youTubeUrl, description } = props.props.todoList;

    const [titleUpdate, setTitleUpdate] = useState();
    const [youTubeUrlUpdate, setYouTubeUrlUpdate] = useState();
    const [descriptionUpdate, setDescriptionUpdate] = useState();
    const [error, setError] = useState();
    // const [todoSuccess, setTodoSuccess] = useState();

    const { userData } = useContext(UserContext);


    // useEffect(() => {
    //     setTitleUpdate(title);

    // })

    const handleInputChange = (e) => {
        // e.preventDefault();
        console.log(e.target.value);
        // const { value } = e.target;
        setTitleUpdate({ value: e.target.value });
    }

    //   handleInputßßChange = titleUpdate.bind(title)

    const submit = async (e) => {
        console.log('in on submit')
        e.preventDefault();
        try {

            const updateTodo = {  
                title: !titleUpdate ? description : titleUpdate, 
                youTubeUrl: !youTubeUrlUpdate ? youTubeUrl : youTubeUrlUpdate, 
                description: !descriptionUpdate ? description : descriptionUpdate
            }

            console.log(updateTodo);

            await API.updateTodo(updateTodo, userData.token, _id)
                .then(res => props.setTodoSuccess(`Success, ${userData.user.displayName}!  Your Todo has been saved.`))
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )

        } catch (err) {
            console.log("something when wrong")
        }
    }

    // console.log('in forms', title, youTubeUrl, description )
    return (
        <>
            {/* {console.log(typeof title)} */}
            <div className='container'>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}

                {props.todoSuccess && (
                    <SuccessNotice message={props.todoSuccess} clearSuccess={() => {
                        props.setTodoSuccess(undefined);
                        // setTitle('');
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

                    <label htmlFor='todo-youtubeurl'>YouTube Desktop Application URL</label>
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
