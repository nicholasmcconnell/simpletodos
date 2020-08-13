import React, { useState } from 'react';
import Modal from '../layout/Modal';

export default function Card(props) {

    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    const youTubeURL = props.todoList.youTubeUrl;
    const urlArray = (youTubeURL.split(youTubeURL.charAt(youTubeURL.length - 12)))
    const youTubeId = urlArray[urlArray.length-1];

    return (
        <>
            {/* {toggle && <Modal />} */}

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
                    <Modal
                        show={show}
                        handleClose={hideModal}
                        todoList={props.todoList}
                        getTodos={props.getTodos}
                    >
                    </Modal>

                    <button className='todo-card-button' onClick={showModal}>Edit</button>
                    <button className='todo-card-button' onClick={() => props.deleteTodos(props.todoList._id)}>Delete</button>
                </div>
            </div>
        </>
    )
}
