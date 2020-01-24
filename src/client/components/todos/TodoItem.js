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
        <DeleteButton onClick={this.props.deleteTodo.bind(this, id)}>
          X
        </DeleteButton>
      </ListItem>
    );
  }
}

const ListItem = styled.li`
  padding: 10px 0;
  list-style: none;

  button {
    margin: 0 0 0 10px;
  }
`;

const DeleteButton = styled.button`
  margin: 0 0 0 10px;
  border: none;
  border-radius: 25px;
  color: #888;
  height: 25px;
  width: 25px;
  cursor: pointer;
  text-align: center;
`;
