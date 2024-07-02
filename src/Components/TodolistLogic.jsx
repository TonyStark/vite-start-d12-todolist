import React from 'react'
import { useState,useEffect } from 'react'
import TodolistUI from './TodolistUI'

function TodolistLogic() {
    const [task,setTask]=useState("")
    const [arr, setArr] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const handlesubmit=(e)=>{
        e.preventDefault()
        let obj = {
            id : Date.now(),
            task : task,
          }
          setArr([...arr,obj])
    }
    const handleTaskChange = (e) => {
      setTask(e.target.value); 
    };
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
     },[arr])
  return (
    <TodolistUI task={task} arr={arr} handlesubmit={handlesubmit} handleTaskChange={handleTaskChange}/>
  )
}

export default TodolistLogic
