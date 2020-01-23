import React, { Component } from 'react';
import styled from 'styled-components';

export default class AppContainer extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

const Container = styled.div`
  display: flex;
`;
