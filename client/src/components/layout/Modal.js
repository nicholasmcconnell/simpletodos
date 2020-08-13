import React from 'react'
import UpdateForm from './UpdateForm'

export default function Modal(props) {

    console.log('in modal', props);


    const showHideClassName = props.show ? "modal display-block" : "modal display-none";


    return (
        <>
            <div id="myModal" className={showHideClassName}>
                <div className="modal-main">
                <UpdateForm props={props}/>
                  
                    <button className="close" onClick={() => { props.handleClose(); props.getTodos(); }}>close</button>
                </div>
            </div>
        </>
    )
}
