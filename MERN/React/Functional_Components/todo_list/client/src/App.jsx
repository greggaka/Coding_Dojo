import React, { useState } from 'react';
import './App.css';

import FormDisplay from './components/Form';
import ListDisplay from './components/ListDisplay';

function App() {
  //creates a new array w/ two items. index 1 = value of newTodo, index 2 - value of setNewTodo
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (itemIdx) => {
    setTodos(todos.filter((todo, index) => index !== itemIdx))
  }

  const toggle = (itemIdx) => {
    const updatedTodo = todos.map((currentTask, i) => {
      if (itemIdx === i) {
        currentTask.completed = !currentTask.completed;
      }
      return currentTask;
    });
    setTodos(updatedTodo);
  }

  const todoElements = todos.map((todo, i) => <ListDisplay toggle={toggle} delete={deleteTodo} i={i} completed = {todo.completed} todo={todo.task} />)

  return (
    <div className="App">
      <h1>To Do List</h1>
      < FormDisplay handleSubmit={addTodo}/>
      <div>
        {todoElements}
      </div>
    </div>
  );
}

export default App;
