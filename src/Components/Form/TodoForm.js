import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      nombre: '',
      lugar: '',
      descripcion: '',
      priority: 'low',
      hora:'',
      fecha:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      nombre: '',
      lugar: '',
      descripcion: '',
      priority: 'low',
      hora:'',
      fecha:''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lugar"
              className="form-control"
              value={this.state.lugar}
              onChange={this.handleInputChange}
              placeholder="Lugar"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <input
              type="Time"
              name="hora"
              className="form-control"
              value={this.state.hora}
              onChange={this.handleInputChange}
              placeholder="Hora"
              />
          </div>
          <div className="form-group">
            <input
              type="Date"
              name="fecha"
              className="form-control"
              value={this.state.fecha}
              onChange={this.handleInputChange}
              placeholder="Fecha"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;