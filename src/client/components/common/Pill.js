import React, { Component } from 'react';
import styled from 'styled-components';

export default class Pill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PillContainer>
        <PillButton
          type="button"
          value={this.props.label}
          onClick={e => this.props.onClick(e)}
          className={this.props.active ? 'active' : ''}
        >
          {this.props.label}
        </PillButton>
      </PillContainer>
    );
  }
}

const PillContainer = styled.div`
  display: inline-block;
`;

const PillButton = styled.button`
  text-transform: capitalize;
  border: none;
  padding: 7px 20px;
  border-radius: 3px;
  cursor: pointer;
  background: none;
  border: 1px solid #e4e4e4;
  letter-spacing: 1px;
  opacity: 0.7;
  font-size: 1em;
  font-family: inherit;

  &.active {
    background-color: #ff2173;
    color: #fff;
    border: none;
    opacity: 1;
  }
`;
