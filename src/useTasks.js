import { useState, useEffect } from "react";

const getInitialTasks = () => {
    const tasksLocalStorageContent = localStorage.getItem("tasks");
  return tasksLocalStorageContent
  ? JSON.parse(tasksLocalStorageContent)
  : []
};

export const useTasks = () => {

    const [tasks, setTasks] = useState(getInitialTasks);
   
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
      }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }
    
    
    const setAllDone = () => {
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
    
    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };
};

