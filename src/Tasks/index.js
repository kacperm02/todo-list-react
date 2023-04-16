import "./style.css";
const Tasks = ({tasks, removeTask, hideDone}) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                className={`list__item${
                    task.done && hideDone
                    ? " list__item--hidden"
                    : ""}`
                }
            >
                <button className="task__button">{task.done ? " ✔" : ""}</button>
                <p className="task__content">{task.content}</p>
                <button className="task__button task__button--remove" onClick={() => removeTask(task.id)}>🗑</button>
            </li>
        ))}
    </ul>
)

export default Tasks;