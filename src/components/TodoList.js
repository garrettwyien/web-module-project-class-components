import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    const handleClick = ()=> {
        props.handleClear();
      }

    return (
        <div className="todo-list">
            {props.toDoItems.map(item => (
            <ToDo handleDone={props.handleDone} key={item.id} item={item}/>
            ))}
            <button onClick={handleClick} className="clear-btn">
            Clear Completed
            </button>
        </div>
    )
}

export default ToDoList;