import React, { Component } from 'react';
import './stylesheets/app.css';

import Todos from './components/todos/Todos';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { "id": 1, "title": "Item 1", "completed": false },
        { "id": 2, "title": "Item 2", "completed": false },
        { "id": 3, "title": "Item 3", "completed": false },
      ]
    }
  }
  
  componentDidMount() {

  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Another Todo App</h1>
        <Todos 
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}
