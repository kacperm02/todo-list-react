import "./style.css";

const Buttons = ({ tasks, HideDones }) => (
    tasks.length > 0  && (
        <>
        <li><button className="tasksList__item tasksList__item--clickable">
            {HideDones ? "Pokaż" : "Ukryj"} ukończone
        </button></li>
        <li><button className="tasksList__item tasksList__item--clickable"
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </button></li></>
));

export default Buttons;