import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./header";
import Container from "./Container";
import "./index.css";


const tasks = [
  {id:1, content: "Zrobić todo liste", done:true},
  {id:2, content:"Nauczyć się reacta",done:false},
];

const hideDoneTask = false;

function App() {
  return (
    <Container className="container">
        <Header title="Lista zadań"/>
        <Section 
        title={"Dodaj nowe zadanie"} 
        body={<Form />}
        />
        <Section 
        title={"Lista Zadań"} 
        body={<Tasks tasks={tasks}/>}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask}/>}
        />
       
    </Container>
  );
}

export default App;
