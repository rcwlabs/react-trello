import React from 'react';

import Card from './Card';

function List() {
    return(
        <div className='list'>
            <h2>Here is a list</h2>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default List