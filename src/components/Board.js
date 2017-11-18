import React from 'react';

import List from './List';

function Board() {
    return(
        <div className='board'>
            <h1>Here is a board</h1>
            <List />
            <List />
            <List />
        </div>
    );
}

export default Board