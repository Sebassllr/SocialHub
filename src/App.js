import React, { Component } from 'react';
import PricipalContainer from './PrincipalContainer/PrincipalContainer'
import './App.css'
import Calendar from './Calendar/Calendar'
import CalendarWeek from './Calendar/CalendarWeek'

class App extends Component {

  render() {

    let name = "Hola";
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor eros erat, sit amet facilisis neque fringilla non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent urna tortor, euismod at auctor ut, commodo ac turpis. Aenean blandit leo nec dolor pretium, ac ultricies erat auctor."
    let characteristics = ["Caminante", "Volador", "Mamifero", "HOLA"];

    return (
      <div className="display-flex">
        <div>
          <PricipalContainer name={name} description={description} characteristics={characteristics}></PricipalContainer>
          <div className="height-200 width-500">
            <Calendar/>
          </div>
        </div>
        <div className="height-200 width-500">
          <CalendarWeek/>
        </div>
      </div>
    );
  }
}

export default App;
