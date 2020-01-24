import React, { Component } from 'react';
import styled from 'styled-components';

export default class Pill extends Component {
  render() {
    return (
      <PillContainer>
        <PillButton
          type="button"
          value={this.props.label}
          onClick={e => this.props.onClick(e)}
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
  padding: 3px 15px;
  border-radius: 100px;
  background: none;
  cursor: pointer;
`;
