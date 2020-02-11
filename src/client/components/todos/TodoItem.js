import React, { Component } from 'react';
import Checkbox from '../common/Checkbox';
import styled from 'styled-components';

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <ListItem>
        <Checkbox
          label={title}
          checked={completed}
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        <DeleteButton onClick={this.props.deleteTodo.bind(this, id)} />
      </ListItem>
    );
  }
}

const ListItem = styled.li`
  padding: 10px 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  opacity: 0;
  border: none;
  color: #888;
  height: 22px;
  width: 22px;
  padding-right: 5px;
  cursor: pointer;
  transition: opacity 0.1s ease-out;
  background: none;

  ${ListItem}:hover & {
    opacity: 100%;
  }

  :after {
    content: 'X';
  }
`;
