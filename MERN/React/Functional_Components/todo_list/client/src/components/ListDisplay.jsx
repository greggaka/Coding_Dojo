import React, { useState } from 'react';

const ListDisplay = (props) => {

    const deleteTask = (e) => {
        props.delete(e);
    }

    const toggleTask = (e) => {
        props.toggle(e);
    }

    return (
        <div>
            {
            <div className="d-flex center">
                <p className={props.completed.toString()}>{props.todo}</p>
                <input type="checkbox" name="complete" onChange={() => toggleTask(props.i)} />
                <button onClick={() => deleteTask(props.i)}>Delete</button>
            </div>
            }
        </div>
    )
}

export default ListDisplay;