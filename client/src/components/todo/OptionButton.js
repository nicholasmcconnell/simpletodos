import React from 'react'

export default function OptionButton({ className, value, name }) {
    return (
        <button className={className} value={value}>{name}</button>
    )
}
