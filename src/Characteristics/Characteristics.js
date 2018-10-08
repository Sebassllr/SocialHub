import React from 'react';
import './Characteristics.css';
const characteristic = (props) => {
    return(
        <div className="display-flex characteristic noselect">
            <span>{props.name}</span>
        </div>
    )
}

export default characteristic;