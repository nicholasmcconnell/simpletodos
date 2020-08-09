import React from 'react'

export default function SuccessNotice(props) {
    return (
        <div>
            <div className='success-notice'>
                <span>{props.message}</span>
                <button onClick={props.clearSuccess}>X</button>
            </div>
        </div>
    )
}
