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

  button {
    margin: 0 0 0 10px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  top: 7px;
  bottom: 0;
  display: none;
  border: none;
  color: #888;
  height: 22px;
  width: 22px;
  cursor: pointer;
  transition: opacity 0.2s ease-out;
  background: none;

  ${ListItem}:hover & {
    display: block;
  }

  :after {
    content: 'X';
  }
`;
