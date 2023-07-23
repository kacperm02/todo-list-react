import "./style.css";
import React,{ useState } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };


    return (
        <form className="form__grid" onSubmit={onFormSubmit}>
            <input 
            value = {newTaskContent}
            className="form__tasks" 
            placeholder="Wpisz zadanie"
            onChange={({target}) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;