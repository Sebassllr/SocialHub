import React from 'react';
import classes from './Characteristics.module.css';

const characteristic = (props) => {

    const styles = [classes.displayFlex, classes.noSelect, classes.characteristic].join(' ');

    return(
        <div className={styles}>
            <span>{props.name}</span>
        </div>
    )
}

export default characteristic;