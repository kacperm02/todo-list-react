import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0  && (
        <>
        <li><button onClick={toggleHideDone} className="tasksList__item tasksList__item--clickable">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button></li>
        <li><button className="tasksList__item tasksList__item--clickable"
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </button></li></>
));

export default Buttons;