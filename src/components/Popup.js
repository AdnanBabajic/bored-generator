import React from 'react'
import './Popup.css'
import { Button } from './Button'

/* TODO - Implement delete and edit */

const Popup = ({ closed, onClose, onDelete }) => {
    console.log(closed)
    return (
        <>
            <div style={{display: closed ? 'none' : 'block'}} className="container">
                <h3 className='x-btn' onClick={onClose}>x</h3>
                <Button text="Delete" onClick={onDelete}/>
            </div>
        </>
    )
}

export default Popup
