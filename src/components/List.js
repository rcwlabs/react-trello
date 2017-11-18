import React from 'react';

import Card from './Card';

function List(props) {
    return(
        <div className='list'>
            <h2>{props.listTitle}</h2>
            <Card cardTitle='Card One'/>
            <Card cardTitle='Card Two'/>
            <Card cardTitle='Card Three'/>
        </div>
    )
}

export default List