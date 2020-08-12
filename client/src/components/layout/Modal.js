import React from 'react'
import Form from '../layout/Form'

export default function Modal(props) {

    console.log('in modal', props);


    const showHideClassName = props.show ? "modal display-block" : "modal display-none";


    return (
        <>
            <div id="myModal" className={showHideClassName}>
                <div className="modal-main">
                <Form props={props}/>
                  
                    <button className="close" onClick={props.handleClose}>close</button>
                </div>
            </div>
        </>
    )
}
