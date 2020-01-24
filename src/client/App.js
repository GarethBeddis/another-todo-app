import React, { Component } from 'react';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Sidebar from './components/containers/Sidebar';
import AppContainer from './components/containers/AppContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      showingTodos: 'all',
    };

    this.filters = ['all', 'active', 'completed'];
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = async () => {
    try {
      const url = '/api/todos';
      const response = await fetch(url);
      const result = await response.json();
      this.setState({
        todos: result,
      });
    } catch (err) {
      console.error(err);
    }
  };

  addTodo = async title => {
    try {
      const url = '/api/todos';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title }),
      });

      const newTodo = await response.json();

      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    } catch (err) {
      console.error(err);
    }
  };

  deleteTodo = async id => {
    try {
      const url = '/api/todos/' + id;
      await fetch(url, {
        method: 'DELETE',
      });

      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)],
      });
    } catch (err) {
      console.error(err);
    }
  };

  toggleComplete = async id => {
    try {
      const todoStatus = this.state.todos.find(todo => todo.id == id);
      const url = '/api/todos/' + id;
      await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !todoStatus.completed,
        }),
      });

      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    this.shownTodos = this.state.todos.filter(todo => {
      switch (this.state.showingTodos) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    }, this);

    return (
      <AppContainer>
        <div className="content">
          <h1 className="title">Another Todo App</h1>
          <Todos
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
            filters={this.filters}
            todos={this.shownTodos}
            toggleComplete={this.toggleComplete}
          />
          <span>
            {this.state.todos.filter(todo => todo.completed === false).length}{' '}
            remaining
          </span>
        </div>
      </AppContainer>
    );
  }
}
