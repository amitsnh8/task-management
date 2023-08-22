import React,{useState,useEffect} from "react";
import './App.css';
import AddTask from './components/AddTask';
import ManageTask from './components/ManageTask';

function App() {
  const [todoList,setTodoList]=useState(null);
  const [etodoList,setEtodoList]=useState([]);
  const [rtodoList,setrtodoList]=useState(null);

  const addTodoList=(task)=>{
 console.log("task",task);

 if(task.length>0){
  setEtodoList(prevState => [...prevState, task])
}

  }
  const removeTodolist=(index)=>{
    console.log("index",index);
    let rlist=etodoList;
    rlist.splice(index, 1);
    setrtodoList(rlist);
   
     }
  useEffect(()=>{
if(etodoList.length>0){
  console.log("etodoList",etodoList.length);
  

    setTodoList(etodoList);
  
}
  },[etodoList.length])
  
  useEffect(()=>{
    if(rtodoList!==null){
      console.log("rtodoList",rtodoList);
        setEtodoList(rtodoList);
      setrtodoList(null);
    }
      },[rtodoList])
  console.log("etodoList",etodoList);
console.log("todolist",todoList);
  return (
    <div className="App">
      <AddTask todoList={todoList} addTodoList={addTodoList} />
      <ManageTask todoList={todoList} removeTodolist={removeTodolist} />
    </div>
  );
}

export default App;
