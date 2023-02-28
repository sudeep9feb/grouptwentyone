import { useState } from 'react';
import './App.css';

function App() {

  // const tasks = ["Task 1","Task 2"]
  
  // const stateVar = useState(true)

  const [tasks,setTasks] = useState(["Task 1","Task 2"])

  // console.log(stateVar)
  console.log("Rendering the app")

  const taskElements = tasks.map((task) =>{
    return <h3>{task}</h3>
  })
  function addTask(){
    const taskNew = `Task ${tasks.length + 1}`
    // tasks.push(taskNew)
    setTasks((prevTasks =>{
      return [...prevTasks,taskNew]
    }))
    
    console.log(tasks)
  }

  return (
    <div>
      {taskElements}
      <button onClick={addTask}>Add Tasks</button>
    </div>
  );
}

export default App;
