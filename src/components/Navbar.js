import React from 'react';

export default function Navbar(props) {
    return(
        <div className='navbar'>
            <ul>
                {props.links}
            </ul>
        </div>
    );
}