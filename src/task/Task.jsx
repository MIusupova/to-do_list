const Task = (props) => {
    const handleDeleteTask = (id) => {}
    return (
            <div>        
                <span className="todo__task"> {props.value}</span>
                <span className="todo__action todo__action_complete"></span>
                <span className="todo__action todo__action_delete" 
                onClick = {() => handleDeleteTask(props.id)}></span>
            </div>
    )
}
export default Task;
//onClick это обработчик событии