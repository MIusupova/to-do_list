import {useState} from "react";
import Content from "./content/Content";
import Select from "./select/Select";
import Input from "./input/Input";

const App = () => {
  const [tasks, setTasks] = useState(
     localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [],
    );
  const [id, setId] = useState(
      localStorage.getItem('id') !== null ? JSON.parse(localStorage.getItem('id')) : 0,
     );
    
//разделение приложения на компоненты (input, select и.д)и отдельный компонент для задач
  return (
    <div className="todo">
      <Input id = {id} setId = {setId} setTasks = {setTasks} tasks = {tasks}/>
      <Select/>
      <Content tasks={tasks} setTasks={setTasks}/> 
    </div>
    //передаем массив в props
  )
}

export default App; //Позволяю другим файлам получить Доступ функции к App
