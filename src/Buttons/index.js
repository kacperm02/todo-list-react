import {Button} from './styled';

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0  && (
        <>
        <li><Button onClick={toggleHideDone}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button></li>
        <li><Button onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </Button></li></>
));

export default Buttons;