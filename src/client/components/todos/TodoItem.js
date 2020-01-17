import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {

        const { id, title, completed } = this.props.todo;

        return (
            <li>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={this.props.toggleComplete.bind(this, id)}
                />
                <label>{title}</label>
                <button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </li>
        )
    }
}
