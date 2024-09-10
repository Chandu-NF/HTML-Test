
import React, { useState } from 'react';
import Task from '../src/Task';
import './App.css';

function App() {

  const [taskName, setTaskName] = useState("")
  const[taskList, setTaskList] = useState([])

  const addTask = (e)=>{
    e.preventDefault();
    setTaskList([...taskList, {task: taskName}])
    setTaskName("")
  }

    return (
      <div className='App'>
        <h2 className="title"> To-Do List</h2>
  <form onSubmit={addTask}>
        <input
        type="text"
        className="Task"
        value ={taskName}
        required
        placeholder='Enter your Task'
        onChange={(e) =>
          setTaskName(e.target.value)
        }/>
        <button className="add" type='submit'>Add Task</button>
  </form>
       
    
   

        <label className = "lab"> Your Tasks :</label>
        <ul className="taskList">
          {taskList.map((task) =>{
          return  <Task key={task.task} taskName = {task.task}/>
          }
        )
        }
        </ul>

      </div> 
    )
  }
 

export default App
