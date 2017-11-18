import React from 'react';

function Card(props) {
    return(
        <div className='card'>{props.cardTitle}</div>
    );
}

export default Card