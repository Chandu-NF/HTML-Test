
import { Box, Card, CardContent, List, ListItem, Typography } from '@mui/joy';
import React, { useState } from 'react';
import Task from './Task';
import './index.css';

function To_Do_List() {

  const [taskName, setTaskName] = useState("")
  const[taskList, setTaskList] = useState([])

  const addTask = (e)=>{
    e.preventDefault();
    setTaskList([...taskList, {id: Date.now(), name: taskName}])
    setTaskName("")
  }

  const deleteTask = (id) => {
    const updatedData = taskList.filter(task => task.id !== id);
    setTaskList(updatedData);
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

  <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '18rem',
        width: '99%',
      }}
    >
      <Card variant="outlined" 
      sx={{ 
        minWidth: 280, 
        backgroundColor:'wheat', 
        borderRadius: 12, 
        border:'2px solid black'} } >
        <CardContent>
          <Typography level="title-md" textColor="common.black">
            Your Tasks:
          </Typography>
          <Typography textColor="common.black">

          <List sx={{ padding: '8px 0', position: 'relative' }}>
              {taskList.length > 0 ? (
                taskList.map((task) => (
                 <li> <Task key={task.id} taskName={task.name} Delete={()=>deleteTask(task.id)} /></li>
                ))
              ) : (
                <ListItem>No tasks added yet</ListItem>
              )}
            </List>
          </Typography>
        </CardContent>
      </Card>
    </Box>
</div> 
    )
  }
 

export default To_Do_List
