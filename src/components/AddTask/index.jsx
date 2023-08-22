import React,{useEffect, useState} from "react";
import {Box,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import data from "../../data";
const AddTask=({todoList,addTodoList})=>{
  const [list,setList]=useState(null);
  const [task,setTask]=useState("");
  const changeTask=(e)=>{
    const newTask=e.target.value;
    setTask(newTask);
  }
  const handleSubmit=()=>{
    
    if(task!==""){
      addTodoList(task);
setTask("")
    }
  }
return(
    <>
    <h1>Add Task</h1>
    <Box
      component="form"
      
      noValidate
      autoComplete="off"
    >

<TextField id="outlined-basic" label="Name" variant="outlined" onChange={changeTask} value={task} />

<Button variant="contained" onClick={handleSubmit}>Contained</Button>
    </Box>
</>
)
}
export default AddTask;