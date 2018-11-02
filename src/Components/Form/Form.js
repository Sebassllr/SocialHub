import React from 'react';
import Input from './Input/Input'
const form = props => {

    names = [];

    const nombres = names.map(e => {
            return(<Input name={e}/>)
        });

    return(
        <div>
            {nombres}
        </div>
    );
}

export default form;
