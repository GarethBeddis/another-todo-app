import React, { Component } from 'react';
import styled from 'styled-components';
export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // Check input is not empty
    if (this.state.title !== '') {
      // Add todo
      this.props.addTodo(this.state.title);

      // Reset input
      this.setState({
        title: '',
      });
    }
  };

  render() {
    return (
      <AddTodoForm onSubmit={this.onSubmit}>
        <InputText
          type="text"
          value={this.state.title}
          name="title"
          placeholder="Add item..."
          onChange={this.onChange}
        />
        <InputSubmit type="submit" value="Submit" />
      </AddTodoForm>
    );
  }
}

const AddTodoForm = styled.form`
  padding: 5px 0;
`;

const InputText = styled.input`
  padding: 5px;
  border: 1px solid #e4e4e4;
`;

const InputSubmit = styled.input`
  display: none;
`;
