import React from 'react';
import classes from "./PrincipalContainer.module.css";
import Characteristic from "../Characteristics/Characteristics";

const pricipalContainer = (props) => {

    const characteristics = props.characteristics;
    const char = characteristics.map(char => (<Characteristic name={char}/>));
    
    return(
        <div className={classes.box}>
            <div>
                <div className={classes.displayFlex}>
                    <span className={[classes.center, classes.arvo, classes.title, classes.noselect].join(' ')}>{props.name}</span>
                </div>
                <div className={classes.marginContent}>
                    <hr/>
                    <div>
                        <div className={[classes.description, classes.noselect].join(' ')}>
                            {props.description}
                        </div>
                        <div className={[classes.displayFlex, classes.classContainer, classes.marginTop].join(' ')}>
                            {char}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricipalContainer;