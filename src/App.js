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
        <p>{message}</p>
        <List list={list} setList={setList} setMessage={setMessage} />
      </section>
      <section className='form'>
        <p>Add a task</p>
        <div>
          <input type='text' id='text-field' />
          <button onClick={addTask}>Submit</button>
        </div>
      </section>
      <button onClick={clearAll}>Clear all</button>
    </main>
  );
}

export default App;
