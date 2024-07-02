import React from 'react'
import { useState,useEffect } from 'react'

function TodolistUI({task,arr,handlesubmit,handleTaskChange}) {
    
  return (
    <>
    <div className='mt-3'>
        <h1 className='mb-3 border-bottom'>To Do List</h1>
      <form action="" onSubmit={handlesubmit} className='d-flex gap-4'>
        <input type="text" placeholder='Enter task' onChange={handleTaskChange} className='form-control'/>
        <input type="submit" value="Add" className='btn btn-primary' />
      </form>
    </div>
    <div>
    {arr.map((el) => (
          <div key={el.id} className='d-flex w-100 justify-content-between mt-3 border-bottom border-black py-3'>
            <h4>{el.task}</h4>
            <div className="btn-group d-flex">
              <button className='btn btn-info'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default TodolistUI
