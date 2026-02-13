import React from 'react';
import './app.css';

export function Popup({isOpen, onClose, children}) {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div id='popupBackground'>
            <div id='popupStyle'>
                {children}
                <input type='button' onClick={onClose} value='Close'></input>
            </div>
        </div>
    );
}