import React, { useState,useEffect } from "react";

const ManageTask=({todoList,removeTodolist})=>{
    console.log("manage",todoList);
    const handleRemove=(index)=>{
removeTodolist(index)
    }
return(
    <>
    <h1>Manage Task</h1>
    <ul>
       { todoList!==null?(todoList.map((list,index)=>{
return<li key={index}>{list}<button onClick={()=>handleRemove(index)}>X</button></li>

    })):null}
</ul>
</>
)
}
export default ManageTask;