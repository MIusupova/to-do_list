import Task from "../task/Task";

const Content = (props) => {
    return (
        <ul className="todo__items"> 
            {props.tasks.map((task) => 
                <div key = {task.id} className="todo__item"> 
                    <Task value = {task.value}/>
                </div>
            )}
        </ul>
    )
}
export default Content;