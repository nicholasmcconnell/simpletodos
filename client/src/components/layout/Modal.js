import React, { useState } from 'react'
import UpdateForm from './UpdateForm'

export default function Modal(props) {

    const [todoSuccess, setTodoSuccess] = useState();

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <>
            <div id="myModal" className={showHideClassName}>
                <div className="modal-main">
                    <UpdateForm
                        props={props}
                        todoSuccess={todoSuccess}
                        setTodoSuccess={setTodoSuccess}
                    />
                    <button className="close" onClick={() => { props.handleClose(); props.getTodos(); setTodoSuccess(undefined) }}>close</button>
                </div>
            </div>
        </>
    )
}
