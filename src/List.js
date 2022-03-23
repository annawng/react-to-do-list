function List({ tasks }) {
  return (
    <ul className='list'>
      {tasks.map(({ id, text, completed }) => {
        return (
          <li key={id}>
            <input id={id} type='checkbox' defaultChecked={completed} />
            <label htmlFor={id}>{text}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
