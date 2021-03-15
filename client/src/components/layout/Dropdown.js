import React from 'react'

export default function Dropdown() {
    return (
        <>
            <label className="exType" for="type">Category</label>
            <select name="type">
                <option disabled selected>Select Type</option>
                <option value="Purchase">Run</option>
                <option value="Repair">Walk</option>
                <option value="Order">Jog</option>
                <option value="Clean">Swim</option>
            </select>
        </>
    )
}
