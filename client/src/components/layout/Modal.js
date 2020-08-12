import React from 'react'

export default function Modal(props) {

    console.log('in modal', props.show);


    const showHideClassName = props.show ? "modal display-block" : "modal display-none";


    return (
        <>
            <div id="myModal" className={showHideClassName}>
                <div className="modal-main">
                    {/* <span className="close">&times;</span> */}
                    <p>Some text in the Modal..</p>
                    <button className="close" onClick={props.handleClose}>close</button>
                </div>
            </div>
        </>
    )
}
