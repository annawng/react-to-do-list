import React, { useState } from 'react';
import List from './List';
import uniqid from 'uniqid';

function App() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('No tasks added!');

  const addTask = () => {
    let textField = document.getElementById('text-field');
    let task = textField.value;
    textField.value = '';
    if (task !== '') {
      let item = { id: uniqid(), text: task, completed: false };
      list.push(item);
      setList([...list]); // spread to new array so it renders again
      let length = list.filter((task) => !task.completed).length;
      let message = length + ' incomplete task';
      if (length !== 1) {
        message += 's';
      }
      setMessage(message);
    }
  };

  const clearAll = () => {
    setList([]);
    setMessage('No tasks added!');
  };

  return (
    <main>
      <section className='container'>
        <h1>Tasks</h1>
        <List tasks={list} setMessage={setMessage} />
        <p>{message}</p>
      </section>
      <section className='form'>
        <input type='text' id='text-field' />
        <input type='submit' onClick={addTask} />
      </section>
      <button onClick={clearAll}>Clear All</button>
    </main>
  );
}

export default App;
