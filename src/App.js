import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./header";
import Container from "./Container";
import { useState } from "react";
import {StyledBody} from "./styled.js";
import {useTasks} from "./useTasks.js";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <StyledBody>
    <Container className="container">
        <Header title="Lista zadań"/>
        <Section 
        title={"Dodaj nowe zadanie"} 
        body={<Form addNewTask={addNewTask}/>}
        />
        <Section 
        title={"Lista Zadań"} 
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone}/>}
        extraHeaderContent={
        <Buttons tasks={tasks}
         hideDone={hideDone} 
         toggleHideDone={toggleHideDone}
         setAllDone={setAllDone}
         />}
        />
       
    </Container></StyledBody>
  );
}

export default App;
