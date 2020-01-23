import React, { Component } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

export default class Todos extends Component {
  render() {
    // Todo: add <ul> wrapper
    const todoItems = this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={this.props.toggleComplete}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });

    return <TodosContainer>{todoItems}</TodosContainer>;
  }
}

const TodosContainer = styled.div`
  padding: 5px 0 10px;
`;
