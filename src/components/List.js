import React, { Component } from 'react';

import Card from './Card';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                { text: 'card one', quote: 'this is a thing!' },
                { text: 'card two', quote: 'you are special!' },
                { text: 'card three', quote: 'hang in there baby!' }
            ]
        };
    }

    render() {

        const CardList = this.state.cards.map((card, index) => {
            return <Card key={index} {...card} />
        });

        return(
            <div className='list'>
                <h2>{this.props.title}</h2>
                {CardList}
            </div>
        );
    }
}