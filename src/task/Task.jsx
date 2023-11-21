const Task = (props) => {
    const handleDeleteTask = (id) => {
        console.log(id);
    }
    const handleCompleteTask = (id) => {
        console.log(id);
    }
    return (
            <div>        
                <span className="todo__task"> {props.value} </span>
                <span className="todo__action todo__action_complete" 
                onClick = {() => handleCompleteTask(props.id)}></span>
                <span className="todo__action todo__action_delete" 
                onClick = {() => handleDeleteTask(props.id)}></span>
                <div className="todo__date">{props.date}</div>
            </div>
    )
}
export default Task;
//onClick это обработчик событии с большой буквой С
// фигурные скобки используют чтобы добавить чистый Джава скрипт код
// название для клика у программистов принято называть со слова handle 