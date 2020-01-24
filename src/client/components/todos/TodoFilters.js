import React, { Component } from 'react';
import styled from 'styled-components';
import Pill from '../common/Pill';

export default class TodoFilters extends Component {
  render() {
    this.todoFilters = this.props.filters.map(label => {
      return (
        <Pill
          key={label}
          label={label}
          onClick={this.props.updateFilter(label)}
        />
      );
    });
    return <FiltersContainer>{this.todoFilters}</FiltersContainer>;
  }
}

const FiltersContainer = styled.div``;
