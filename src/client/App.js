import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      todos: []
    }
  }
  
  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            todos: result
          });
        },
        (error) => {
          console.error(error)
        }
      );
  }


  addTodo = async (title) => {
    const rawResponse = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title: title})
    })

    const newTodo = await rawResponse.json();

    this.setState({
      "todos": [...this.state.todos, newTodo]
    })
  }

  deleteTodo = (id) => {
    // TODO: send DELETE req
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
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
          deleteTodo={this.deleteTodo}
        />
        <span>{this.state.todos.filter(todo => todo.completed === false).length} remaining</span>
      </div>
    );
  }
}
