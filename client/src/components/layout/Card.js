import React, { useState } from 'react';
import Modal from '../layout/Modal';

export default function Card(props) {

    console.log('in card', props);

    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }




    //set to take last 11 digits of URL then url can come from anywhere
    const youTubeURL = props.todoList.youTubeUrl;
    const youTubeId = youTubeURL.split('=')[1];
    // const url = "https://www.youtube.com/embed/" + youTubeId;
    // console.log(url);

    // const youTubeId = 'hPq0fguAPBs';

    if (!toggle) {
        console.log('false', toggle)
    } else {
        console.log('true', toggle)
    }

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
                    {console.log(toggle)}
                    {/* { toggle ? true : false} */}
                    {/* {(toggle) ?
                        <button className='todo-card-button' onClick={() => setToggle(!toggle)}>Edit</button>
                        : <button className='todo-card-button' onClick={() => setToggle(!toggle)}>Save</button>} */}
                    <Modal
                        show={show}
                        handleClose={hideModal}
                    >
                    </Modal>

                    <button className='todo-card-button' onClick={showModal}>Edit</button>
                    <button className='todo-card-button' onClick={() => props.deleteTodos(props.todoList._id)}>Delete</button>
                </div>
            </div>
        </>
    )
}
