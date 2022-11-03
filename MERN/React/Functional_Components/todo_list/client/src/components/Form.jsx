import React, { useState } from 'react';

const initialState = {
    task: "",
    completed: false
}


const FormDisplay = (props) => {
    const[newTask, setNewTask] = useState(initialState);

    const handleChange = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validator - cannot submit an empty input
        if (newTask.length === 0) {
            return;
        }
        
        props.handleSubmit(newTask)
        setNewTask(initialState) //resets input back to an empty string
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Add a Task</label>
            <input type="text" name="task" onChange={handleChange} value = {newTask.task} />
            <input type="submit" value="Add Task" />
        </form>
    );
}

export default FormDisplay;