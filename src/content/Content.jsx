import Task from "../task/Task";
//передаю массив tasks с App через props
//одно выражение один код, пишем только то, что возвращает какой-то результат
const Content = ({tasks, setTasks}) => {
    return (
        <ul className="todo__items"> 
            {tasks.map(({id, value, completed}) => (
                <Task 
                    value = {value}
                    id = {id}
                    date = {new Date().toLocaleDateString().slice(0, -3)}
                    completed = {completed}
                    setTasks= {setTasks}
                    />
            ))}
        </ul>
    )
}
export default Content;
//<Task value = {task.value}  ввывела задачи на экран
// map перебирает каждую задачу добавляя в новый массив props.tasks.map((task)     
//Когда перебираем через цикл одинаковые элементы нужно создать для каждого элемента атрибут key для уникального значения и обернуть все это в див
//деструктуризация
//const user = {
    //login: 'admin'
    //password: '123456'
//}
//const {login, password} = user
//console.log(login)

//массив пример
//const logins = ['user', 'admin']
//const [login1, login2] = logins
//console.log(login1);
//console.log(login2);

//деструктуризация добавление элементов в существующий массив
//const logins = ['user', 'admin']
//const newlogins = [... logins, 'guest']

//пример с обьектом
//const user = {
    //login: 'admin'
    //password: '123456'
//}

//console.log({}...user, type: 'client'})

//хуки это функции которые позволяет взаимодейстовать с приложением, взаимодействовать с тегами, с данными и т.д
// основные 5 хуков
//1 хук состояния