import React, { Component } from 'react';
import styled from 'styled-components';

export default class AppContainer extends Component {
  render() {
    return (
      <Container>
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 5px;
`;

const Content = styled.div`
  max-width: 550px;
  width: 100%;
`;
