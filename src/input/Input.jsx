import { useEffect, useState } from "react";

const Input = ({id, setId, tasks, setTasks}) => {
  const [value, setValue] = useState ('');
  const sendTask = (event) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        value: value,
        date: new Date().toLocaleString().slice(0, -3),
        id: id,
        completed: false,
      }
    ]);
    setValue ('')
    setId(id + 1);
  };
  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('id', JSON.stringify(id))
  }, [tasks, id])
    
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