import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
             "title": ""
        }
    }

    onChange = (e) => {
        this.setState({
            "title": e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        // Check input is not empty
        if(this.state.title !== "") {
            // Add todo
            this.props.addTodo(this.state.title)
            
            // Reset input
            this.setState({
                "title": ""
            })
        } 


    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.title} name="title" placeholder="Add item..." onChange={this.onChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
