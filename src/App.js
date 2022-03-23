import React, { useState } from 'react';
import List from './List';
import uniqid from 'uniqid';

function App() {
  const [list, setList] = useState([]);

  const addTask = () => {
    let textField = document.getElementById('text-field');
    let task = textField.value;
    textField.value = '';
    let item = { id: uniqid(), text: task, completed: false };
    list.push(item);
    setList([...list]); // spread to new array so it renders again
  };

  return (
    <main>
      <section className='container'>
        <h1>Tasks</h1>
        <List tasks={list} />
      </section>
      <section className='form'>
        <input type='text' id='text-field' />
        <input type='submit' onClick={addTask} />
      </section>
    </main>
  );
}

export default App;
