import React from 'react';
import './Feature.css';
import Button from '../Button/Button';

function Feature() {
    return (
        <div className="feature">
            <Button type="edit" />
            <Button type="delete" />
        </div>
    )
}

export default Feature