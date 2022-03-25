function List({ list, setList, setMessage }) {
  const completeTask = (clicked) => {
    clicked.completed = !clicked.completed;
    let length = list.filter((task) => !task.completed).length;
    let message = length + ' incomplete task';
    if (length !== 1) {
      message += 's';
    }
    setMessage(message);
  };

  const deleteTask = (clicked) => {
    let newList = list.filter((task) => task !== clicked);
    if (newList.length === 0) {
      setMessage('No tasks added!');
    } else {
      let length = newList.filter((task) => !task.completed).length;
      let message = length + ' incomplete task';
      if (length !== 1) {
        message += 's';
      }
      setMessage(message);
    }
    setList(newList);
  };

  return (
    <ul className='list'>
      {list.map((task) => {
        const { id, text, completed } = task;
        return (
          <li key={id}>
            <div>
              <input
                id={id}
                type='checkbox'
                defaultChecked={completed}
                onClick={() => {
                  completeTask(task);
                }}
              />
              <label htmlFor={id}>{text}</label>
            </div>
            <span
              className='delete'
              onClick={() => {
                deleteTask(task);
              }}
            >
              x
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
