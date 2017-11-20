import React, { Component } from 'react';

export default class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            inputValue: ''
        };
    }

    handleInputChange(event) {
        this.setState({inputValue: event.target.value});
        console.log(this.state.inputValue);
    }

    handleEditToggle() {
        this.setState({editing: !this.state.editing});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        // Show add button if editing is false
        if (!this.state.editing) {
            return(
                <div className='buttons'>
                    <button 
                        className='btn btn-large btn-primary'
                        onClick={() => this.handleEditToggle()}>
                        New {this.props.type}
                    </button>
                </div>
            );
        }

        // Show add form if editing is true
        return(
            <form>
                <input 
                    value={this.state.inputValue}
                    onChange={event => this.handleInputChange(event)}
                />
                <div className='buttons'>
                    <button 
                        className='btn btn-large btn-info'
                        onClick={event => this.handleSubmit(event)}>
                        Submit
                    </button>
                    <button 
                        className='btn btn-large btn-warning'
                        onClick={() => this.handleEditToggle()}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}