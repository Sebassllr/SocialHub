import React from 'react';
import "./PrincipalContainer.css";
import Characteristic from "../Characteristics/Characteristics";

const pricipalContainer = (props) => {
    const characteristics = props.characteristics;

    const char = characteristics.map(char => (<Characteristic name={char}/>));

    return(
        <div className="box">
            <div>
                <div className="display-flex">
                    <span className="center arvo title noselect">{props.name}</span>
                </div>
                <div className="margin-content">
                    <hr/>
                    <div>
                        <div className="description noselect">
                            {props.description}
                        </div>
                        <div className="display-flex classContainer">
                            {char}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricipalContainer;