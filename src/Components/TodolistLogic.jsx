import React from 'react'
import { useState,useEffect } from 'react'
import TodolistUI from './TodolistUI'

function TodolistLogic() {
    const [task,setTask]=useState("")
    const [arr, setArr] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const handlesubmit=(e)=>{
      console.log("handlesubmit called!");
        e.preventDefault()
        let obj = {
            id : Date.now(),
            task : task,
          }
          setArr([...arr,obj])
          console.log("Updated arr:", arr);
    }
    const handleTaskChange = (e) => {
      setTask(e.target.value); 
    };
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
     },[arr])
     console.log(arr)
  return (
    <TodolistUI task={task} arr={arr} handlesubmit={handlesubmit} handleTaskChange={handleTaskChange}/>
  )
}

export default TodolistLogic
