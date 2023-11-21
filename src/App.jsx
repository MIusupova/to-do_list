import React from "react";
import Content from "./content/Content";
import Select from "./select/Select";
import Input from "./input/Input";
const App = () => {
  const tasks = 
     localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    
//разделение приложения на компоненты (input, select и.д)и отдельный компонент для задач
  return (
    <div className="todo">
      <Input/>
      <Select/>
      <Content tasks={tasks}/> 
    </div>
    //передаем массив в props
  )
}

export default App; //Позволяю другим файлам получить Доступ функции к App
