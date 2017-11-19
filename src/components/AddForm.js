import React, { Component } from 'react';

export default class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            text: ''
        };
    }

    handleEditState(editing) {
        this.setState({editing});
    }

    handleEditSubmit(event) {
        event.preventDefault();
        const text = event.target.value;
        this.setState({text});
        console.log(this.state.text);
        this.handleEditState(false);
    }

    render() {

        if(!this.state.editing) {
            return(
                // Create button here
                <button 
                    onClick={() => this.handleEditState(!this.state.editing)} 
                    className='btn btn-large btn-primary'>
                    Add Card
                </button>
            );
        }

        return(
            // Create form
            <div>
                <form>
                    <input type='text' 
                        onChange={event => this.setState({text: event.target.value})} 
                        value={this.state.text} 
                    />
                    <div className='buttons'>
                        <button 
                            type='submit' 
                            onClick={(event) => this.handleEditSubmit(event)}
                            className='btn btn-large btn-primary'>
                            Submit
                        </button>
                        <button 
                            onClick={() => this.handleEditState(!this.state.editing)} 
                            className='btn btn-large btn-info'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}