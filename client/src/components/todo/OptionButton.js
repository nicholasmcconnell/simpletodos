import React from 'react'

export default function OptionButton({ className, value, name, onClick }) {
    return (
        <button className={className} value={value} onClick={onClick}>{name}</button>
    )
}
