import React, { Component } from 'react';
import styled from 'styled-components';
import Pill from '../common/Pill';

export default class TodoFilters extends Component {
  constructor(props) {
    super(props);

    this.filters = ['all', 'active', 'completed'];
  }

  handleChange = e => {
    this.props.updateFilter(e);
  };

  render() {
    this.todoFilters = this.filters.map(label => {
      return (
        <Pill
          key={label}
          label={label}
          active={label === this.props.activeFilter}
          onClick={e => this.props.updateFilter(e)}
        ></Pill>
      );
    });
    return <FiltersContainer>{this.todoFilters}</FiltersContainer>;
  }
}

const FiltersContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  padding: 10px 0;
`;
