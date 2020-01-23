import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  render() {
    // Todo: add <ul> wrapper
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}
