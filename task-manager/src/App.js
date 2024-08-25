import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';




function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if(newTask.trim() === '') return;
    // setTasks([...tasks, {id: Date.now(), title: newTask, completed: false}]);
    setTasks([ ...tasks, {text:newTask ,completed:false}]);
    setNewTask("");
  };

  const handleToggleComplete =(index) => {
    const updatedTasks = tasks.map((task,i) => { 
      return i === index ? {...task,completed :!task.completed} : task
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => {
      return i!== index;
    });
    console.log(updatedTasks)
    setTasks(updatedTasks);
  };


  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput 
        handleAddTask = {handleAddTask}
        newTask={newTask}  
        setNewTask={setNewTask}  
      />
      <TaskList tasks={tasks} 
        handleDeleteTask = {handleDeleteTask}
        handleToggleComplete = {handleToggleComplete}
      />
    </div>
  );
}

export default App;
