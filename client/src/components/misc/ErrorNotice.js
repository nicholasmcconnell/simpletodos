import React from 'react'

export default function ErrorNotice({ message, clearError }) {
    return (
        <div className='error-notice'>
            <span>{message}</span>
            <button onClick={clearError}>X</button>
        </div>
    )
}
