import React, { Component } from 'react';
import PricipalContainer from '../Components/PrincipalContainer/PrincipalContainer'
import classes from './App.css'
import Calendar from '../Components/Calendar/Calendar'
import Input from '../Components/Input/Input'

class App extends Component {

  render() {

    const name = "Hola";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor eros erat, sit amet facilisis neque fringilla non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent urna tortor, euismod at auctor ut, commodo ac turpis. Aenean blandit leo nec dolor pretium, ac ultricies erat auctor."
    const characteristics = ["Caminante", "Volador", "Mamifero", "HOLA"];
    
    const event = {
      title: 'Nuevo',
      start: new Date(2018, 10, 18, 13, 0),
      end: new Date('2018', '10', '18', '13', '30'),
      allDay: false,
    }

    const event2 = {
      title: 'Nuevo',
      start: new Date('2018', '09', '08'),
      end: new Date('2018', '09', '10'),
      allDay: true,
    }

    const events = [event, event2];
    const defaultView = 'week';
    const views = ['week', 'month', 'agenda'];

/**
 * Contenedor principal y calendario
 *      <div className={classes.displayFlex}>
          <PricipalContainer name={name} description={description} characteristics={characteristics}></PricipalContainer>
          <div className="height-200 width-500">
            <Calendar 
              events={events}
              defaultView={defaultView}
              views={views}
              />
           </div>
 * 
 */

    return (
      <div className={classes.displayFlex}>

      </div>
    );
  }
}

export default App;
