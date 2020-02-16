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
  padding: 50px 5px;
`;

const Content = styled.div`
  max-width: 650px;
  width: 100%;
  background-color: #fff;
  padding: 50px;
  border-radius: 3px;
  box-shadow: inset 0px -2px 2px rgba(0,0,0,0.03);

  @media (max-width: 1024px) {
    padding: 0;
  }
`;
