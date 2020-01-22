import React, { Component } from 'react';
import styled from 'styled-components';

export default class Checkbox extends Component {
  render() {
    return (
      <Label>
        <span className="text">{this.props.label}</span>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <span className="checkmark"></span>
      </Label>
    );
  }
}

const Label = styled.label`
  font-family: initial;
  font-size: 16px;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: transparent;
    border-radius: 50px;
    border: 1px solid #ff2173;
  }

  &:hover input:not(:checked) ~ .checkmark:after {
    border: solid #ff2173;
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
    background-color: #ff2173;
  }

  input:checked ~ .checkmark:after {
    opacity: 1;
  }

  .checkmark:after {
    left: 8px;
    top: 4px;
    height: 10px;
    width: 4px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
