import React, { Component } from 'react';

import Card from './Card';
import AddForm from './AddForm';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                
            ]
        };
    }

    addCard(text) {
        this.setState({
            cards: [
                ...this.state.cards,
                {text}
            ]
        });
    }

    render() {

        const CardList = this.state.cards.map((card, index) => {
            return <Card key={index} {...card} />
        });

        return(
            <div className='list'>
                <h2>{this.props.title}</h2>
                {CardList}
                <AddForm type='card' onAdd={text => this.addCard(text)} />
            </div>
        );
    }
}