import Task from "../task/Task";
//передаю массив tasks с App через props
//одно выражение один код, пишем только то, что возвращает какой-то результат
const Content = (props) => {
    return (
        <ul className="todo__items"> 
            {props.tasks.map((task) => 
                <div key = {task.id} className="todo__item"> 
                    <Task value = {task.value}
                    id = {task.id}
                    date = {new Date().toLocaleDateString().slice(0, -3)}
                    />
                </div>
            )}
        </ul>
    )
}
export default Content;
//<Task value = {task.value}  ввывела задачи на экран
// map перебирает каждую задачу добавляя в новый массив props.tasks.map((task)     
//Когда перебираем через цикл одинаковые элементы нужно создать для каждого элемента атрибут key для уникального значения и обернуть все это в див