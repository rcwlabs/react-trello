import React from 'react';

export default function Card(props) {
    return(
        <div className='card'>
            <h4>{props.text}</h4>
            {props.quote}
        </div>
    );
}