import React, { useState } from 'react'
import UpdateForm from './UpdateForm'

export default function Modal({ todoList, handleClose, getTodos, show }) {
    const [todoSuccess, setTodoSuccess] = useState();

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <>
            <div id="myModal" className={showHideClassName}>
                <div className="modal-main">
                    <UpdateForm
                        todoList={todoList}
                        todoSuccess={todoSuccess}
                        setTodoSuccess={setTodoSuccess}
                    />
                    <button className="close" onClick={() => { handleClose(); getTodos(); setTodoSuccess(undefined) }}>close</button>
                </div>
            </div>
        </>
    )
}
