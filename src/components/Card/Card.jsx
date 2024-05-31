import React from 'react'
import Feature from '../Feature/Feature'
import './Card.css'

function Card({ title, description, status }) {
    const textStatus = {
        'done': 'DONE',
        'pending': 'PENDING',
        'in-progress': 'IN PROGRESS',
        'cancel': 'CANCEL'
    };

    return (
        <div className="item">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className={`status ${status}`}>{textStatus[status]}</div>
            <Feature />
        </div>
    )
}

export default Card