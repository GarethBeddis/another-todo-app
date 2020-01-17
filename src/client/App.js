import React, { Component } from 'react';
import uuid from 'uuid';

import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { "id": uuid.v4(), "title": "Item 1", "completed": false },
        { "id": uuid.v4(), "title": "Item 2", "completed": false },
        { "id": uuid.v4(), "title": "Item 3", "completed": false },
      ]
    }
  }
  
  componentDidMount() {

  }

  addTodo = (title) => {

    const newTodo = {
      "id": uuid.v4(),
      "title": title,
      "completed": false 
    }

    this.setState({
      "todos": [...this.state.todos, newTodo]
    })
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
        <AddTodo 
          addTodo={this.addTodo}
        />
        <Todos 
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}
