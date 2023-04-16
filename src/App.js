import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./header";
import Container from "./Container";
import "./index.css";
import { useState } from "react";



function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
  {id:1, content: "Zrobić todo liste", done:true},
  {id:2, content:"Nauczyć się reacta",done:false},
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <Container className="container">
        <Header title="Lista zadań"/>
        <Section 
        title={"Dodaj nowe zadanie"} 
        body={<Form />}
        />
        <Section 
        title={"Lista Zadań"} 
        body={<Tasks tasks={tasks} removeTask={removeTask}/>}
        extraHeaderContent={
        <Buttons tasks={tasks}
         hideDone={hideDone} 
         toggleHideDone={toggleHideDone}
         />}
        />
       
    </Container>
  );
}

export default App;
