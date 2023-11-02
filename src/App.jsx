import React from "react";
import Content from "./content/Content";
import Select from "./select/Select";
import Input from "./input/Input";
const App = () => {
  const tasks = 
    localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
  return (
    <div className="todo">
      <Input/>
      <Select/>
      <Content tasks={tasks}/>
    </div>
  )
}

export default App; //Позволяю другим файлам получить Доступ функции к App
