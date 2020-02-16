import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import TodoFilters from './TodoFilters';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoFilter: 'all',
    };
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

  updateFilter = async event => {
    console.log(event.target.value);
    await this.setState({ todoFilter: event.target.value });
  };

  render() {
    this.shownTodos = this.state.todos.filter(todo => {
      switch (this.state.todoFilter) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    }, this);

    this.todoItems = this.shownTodos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      );
    });

    return (
      <TodosContainer>
        <TodoFilters updateFilter={this.updateFilter} />
        <AddTodo addTodo={this.addTodo} />
        <TodoItemsContainer>{this.todoItems}</TodoItemsContainer>
        <TodosCounter>
          {this.state.todos.filter(todo => todo.completed === false).length}{' '}
          remaining
        </TodosCounter>
      </TodosContainer>
    );
  }
}

const TodosContainer = styled.div`
  padding: 5px 0 10px;
`;

const TodoItemsContainer = styled.ul``;

const TodosCounter = styled.div`
  padding: 10px 5px;
  text-align: center;
  font-size: 0.9em;
`;
