import {StyledForm, Input, Button} from './styled'
import React,{ useState } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
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
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;