import React, { Component } from 'react';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Sidebar from './components/containers/Sidebar';
import AppContainer from './components/containers/AppContainer';
import Logo from './img/another-todo-logo.png';
import Header from './components/common/Header';

export default class App extends Component {
   render() {
    return (
      <AppContainer>
        <Header title="Another Todo" logo={Logo} />
        <Todos />
      </AppContainer>
    );
  }
}
