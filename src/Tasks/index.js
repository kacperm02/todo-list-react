import "./style.css";
const Tasks = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li
                className={`list__item${
                    task.done && props.HideDones
                    ? " list__item--hidden"
                    : ""}`
                }
            >
                <button className="task__button">{task.done ? " ✔" : ""}</button>
                <p className="task__content">{task.content}</p>
                <button className="task__button task__button--remove">🗑</button>
            </li>
        ))}
    </ul>
)

export default Tasks;