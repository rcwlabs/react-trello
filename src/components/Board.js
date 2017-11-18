import React from 'react';

import List from './List';

function Board() {
    return(
        <div className='board'>
            <h1>Here is a board</h1>
            <List listTitle='List One'/>
            <List listTitle='List Two'/>
            <List listTitle='List Three'/>
        </div>
    );
}

export default Board