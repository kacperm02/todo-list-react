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

  const setAllDone =() => {
    setTasks(tasks => tasks.map(task => ({...task, done: true,})))
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id ) {
        return {...task, done: !task.done};
      }

      return task;
    }))
  }

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, 
      {
        content: newTaskContent,
        done:false,
        id: tasks.length ? tasks[tasks.length -1].id + 1 : 1,
      }
    ])
  }

  return (
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
       
    </Container>
  );
}

export default App;
