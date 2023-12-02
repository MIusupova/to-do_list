import { useState } from "react";

const Input = ({id, setId, tasks, setTasks}) => {
  const [value, setValue] = useState ('');
  const sendTask = (event) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        value: value,
        id: id,
        completed: false,
      }
    ])
    setId(id + 1);
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('id', JSON.stringify(id))
  };
    return (
        <form className="todo__input" onSubmit={sendTask}>
          <input 
            className="todo__text" 
            type="text" 
            value = {value} 
            onChange = {(event) => setValue(event.target.value)}/>
          <button className="todo__add"></button>
        </form>
    );
};

export default Input;