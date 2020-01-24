import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import TodoFilters from './TodoFilters';

export default class Todos extends Component {
  render() {
    this.todoItems = this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={this.props.toggleComplete}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });

    return (
      <TodosContainer>
        <TodoFilters updateFilter={this.props.updateFilter} />
        <AddTodo addTodo={this.props.addTodo} />
        <TodoItemsContainer>{this.todoItems}</TodoItemsContainer>
      </TodosContainer>
    );
  }
}

const TodosContainer = styled.div`
  padding: 5px 0 10px;
`;

const TodoItemsContainer = styled.ul``;
