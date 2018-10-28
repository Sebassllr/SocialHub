import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from '@material-ui/core/Button';
import clas from './Form.module.css'

const forms = (props) => {

    const validate = value => {
        return !value || value.length < 5
          ? 'Field must be at least five characters'
          : null;
      };
   
      
    return(
    
        <Form>
        <h1>Nuevo Evento</h1>

<fieldset>
<legend>Creé un nuevo evento para compartir con su tribu.</legend>
            <label for="fname">Nombre del evento</label>
                <Input type="text" id="fname" name="fname"/>
            <label for="lname">Descripción</label>
                <Textarea type="text" id="lname" name="lname"/>
            <label for="fname">Lugar</label>
                <Input type="text" id="fname" name="fname"/>
            <label for="lname">Hora</label>
                <Input  type="Time" id="lname" name="lname"/>
            <label for="lname">Fecha</label>
                <Input fecha={props.views} type="date" id="fecha" name="lname"/>
            
            
            <Button type="submit" variant="raised" color="primary">Guardar</Button>
            </fieldset>
        </Form>
       
    )
    
}

export default forms;