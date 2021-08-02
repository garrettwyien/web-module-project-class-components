import React, { useState }  from 'react';

const ToDo = props => {
    
    const handleClick = ()=> {
        props.handleDone(props.item.id);
    }

    return (
        <div onClick={handleClick}className={`item${props.item.done ? ' done' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    );    
};

export default ToDo;