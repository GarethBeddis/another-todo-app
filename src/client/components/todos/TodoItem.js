import React, { Component } from 'react'
import Checkbox from '../layout/Checkbox'
import styled from 'styled-components';

export default class TodoItem extends Component {


    render() {

        const { id, title, completed } = this.props.todo;

        return (
            <ListItem>
                <Checkbox 
                    label={title}
                    checked={completed}
                    onChange={this.props.toggleComplete.bind(this, id)}
                />
                <button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </ListItem>
        )
    }
}

const ListItem = styled.li`
    padding: 10px 0;

    button {
        margin: 0 0 0 10px;
    }
`