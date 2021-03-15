import React from 'react'

export default function SuccessNotice({ message, clearSuccess }) {
    return (
        <div>
            <div className='success-notice'>
                <span>{message}</span>
                <button onClick={clearSuccess}>X</button>
            </div>
        </div>
    )
}
