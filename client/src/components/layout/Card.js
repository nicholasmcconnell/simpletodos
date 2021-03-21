import React, { useState } from 'react';
import Modal from './Modal';
import UpdateForm from './UpdateForm'

export default function Card({ deleteTodos, getTodos, todoList, todoList: { title, youTubeUrl, description } }) {
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);


    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    const urlArray = (youTubeUrl.split(youTubeUrl.charAt(youTubeUrl.length - 12)))
    const youTubeId = urlArray[urlArray.length - 1];

    return (
        <>
            <div className='card-body'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{description}</p>
                <div
                    className="video"
                    style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 25,
                        height: 0,
                        color: 'red'

                    }}
                >
                    <iframe
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        src={`https://www.youtube.com/embed/${youTubeId}`}
                        frameBorder="0"
                    />
                </div>


                <div className='buttons-div'>
                    <Modal
                        show={show}
                        handleClose={hideModal}
                        todoList={todoList}
                        getTodos={getTodos}
                    >
                        {/* <UpdateForm
                            todoList={todoList}
                            todoSuccess={todoSuccess}
                            setTodoSuccess={setTodoSuccess}
                        /> */}
                    </Modal>

                    <button className='todo-card-button' onClick={showModal}>Edit</button>
                    <button className='todo-card-button' onClick={() => deleteTodos(todoList._id)}>Delete</button>
                </div>
            </div>
        </>
    )
}
