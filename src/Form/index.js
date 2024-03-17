import {StyledForm, Input, Button} from './styled'
import React,{ useState, useRef } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const InputRef = useRef(null);

    const focusInput = () => {
            InputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };


    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input 
            value = {newTaskContent}
            placeholder="Wpisz zadanie"
            onChange={({target}) => setNewTaskContent(target.value)}
            ref={InputRef}
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;