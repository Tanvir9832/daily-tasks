import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import {RiEdit2Fill} from "react-icons/ri";

import './task.css'

const Task = ({newTask,onChildData}) => {
   const {singleTask,handleEdit,handleDelete,ind} = newTask;
   const {title,desc} = singleTask;
  return (
    <div className='task'>
        <p className='title'>{title}</p>
        <span className='des'>{desc}</span>

        <div className='buttons'>
        <button className='btn' onClick={()=>{handleEdit(ind)}}>
          <RiEdit2Fill className='logo' />
        </button>
        <button className='btn' onClick={()=>{handleDelete(ind)}}>
          <AiFillDelete className='logo' />
        </button>
        </div>

            
    </div>
  )
}

export default Task