function List({ tasks, setMessage }) {
  const completeTask = (task) => {
    task.completed = !task.completed;
    let length = tasks.filter((task) => !task.completed).length;
    let message = length + ' incomplete task';
    if (length !== 1) {
      message += 's';
    }
    setMessage(message);
  };

  return (
    <ul className='list'>
      {tasks.map((task) => {
        const { id, text, completed } = task;
        return (
          <li key={id}>
            <input
              id={id}
              type='checkbox'
              defaultChecked={completed}
              onClick={() => {
                completeTask(task);
              }}
            />
            <label htmlFor={id}>{text}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
