import React, { Component } from 'react';
import styled from 'styled-components';

export default class Pill extends Component {
  render() {
    return (
      <PillContainer>
        <PillLabel type="button" onClick={this.props.onClick}>
          {this.props.label}
        </PillLabel>
      </PillContainer>
    );
  }
}

const PillContainer = styled.div``;
const PillLabel = styled.button``;
