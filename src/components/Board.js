import React, { Component } from 'react';

import List from './List';
import Navbar from './Navbar';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                { href: 'http://google.com', text: 'Google' },
                { href: 'http://stackoverflow.com', text: 'Stack Overflow' },
                { href: 'http://thinkful.com', text: 'Thinkful' }
            ]
        };
    }

    render() {

        const Links = this.state.links.map((link, index) => {
            return <li key={index}><a href={link.href} target='_blank'>{link.text}</a></li>
        });

        return(
            <div className='board'>
                <Navbar links={Links}/>
                <List title='List One' />
                <List title='List Two' />
                <List title='List Three' />
            </div>
        );
    }
}