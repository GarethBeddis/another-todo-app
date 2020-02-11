import React, { Component } from 'react';
import styled from 'styled-components';

export default class Checkbox extends Component {
  render() {
    return (
      <Label>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.props.onChange}
          />
          <span className="checkmark"></span>
          <span className="text">{this.props.label}</span>
      </Label>
    );
  }
}

const Label = styled.label`
  align-items: center;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  padding-left: 5px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }


  .checkmark {
    position: relative;
    height: 22px;
    width: 22px;
    background-color: transparent;
    border-radius: 50px;
    border: 1px solid #e4e4e4;
  }

  &:hover input:not(:checked) ~ .checkmark:after {
    border: solid #5dd6ba;
    border-width: 0 3px 3px 0;
    opacity: 1;
    transition: opacity 0.2s;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    opacity: 0;
  }

  input:checked ~ .checkmark {
    background-color: #5dd6ba;
    border: 1px solid #5dd6ba;
    transition: colour 0.1s;
  }

  input:checked ~ .checkmark:after {
    opacity: 1;
  }

  input:checked ~ .text {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .checkmark:after {
    left: 7px;
    top: 3px;
    height: 13px;
    width: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .text {
    user-select: text;
    word-wrap: anywhere;
    display: flex;
    align-items: center;
    padding: 0 10px;
    flex: 1;
    transition: opacity 0.1s;
  }
`;
