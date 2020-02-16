import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1>{this.props.title}</h1>
        <img src={this.props.logo} />
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  h1,
  img {
    margin: 0 5px;
  }

  h1 {
    font-size: 42px;
    letter-spacing: 1px;
  }

  img {
    max-height: 42px;
  }
`;
