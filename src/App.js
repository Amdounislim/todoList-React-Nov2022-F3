import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  const add = (x) => {
    setTodos([...todos, x])
  }

  const deleteTask = (x) => {
    setTodos(todos.filter(el => el.id !== x))
  }

  const complete = (x) => {
    setTodos(todos.map(el => el.id === x ? { ...el, isDone: !el.isDone } : el))
  }

  return (
    <div className="App">
      <Header add={add} />
      <TodoList todos={todos} deleteTask={deleteTask} complete={complete} />
    </div>
  );
}

export default App;
