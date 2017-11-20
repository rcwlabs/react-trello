import React, { Component } from 'react';

import List from './List';
import Navbar from './Navbar';
import AddForm from './AddForm';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                { href: 'http://google.com', text: 'Google' },
                { href: 'http://stackoverflow.com', text: 'Stack Overflow' },
                { href: 'http://thinkful.com', text: 'Thinkful' }
            ],
            lists: [

            ]
        };
    }

    addList(title) {
        this.setState({
            lists: [
                ...this.state.lists,
                {title}
            ]
        });
    }

    render() {

        const Links = this.state.links.map((link, index) => {
            return <li key={index}><a href={link.href} target='_blank'>{link.text}</a></li>
        });

        const Lists = this.state.lists.map((list, index) => {
            return <List key={index} {...list} />
        });

        return(
            <div className='board'>
                <Navbar links={Links} />
                {Lists}
                <AddForm type='list' onAdd={title => this.addList(title)} />
            </div>
        );
    }
}