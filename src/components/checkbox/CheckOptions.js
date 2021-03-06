import React from 'react'
import './CheckOptions.scss'

const CheckOptions = (text) => {
    return (
        <label className="checkbox">
            <input type="checkbox" />
            <div className="checkbox__text">{text.text}</div>
        </label>
    )
}

export default CheckOptions