import React, { useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'
import Task from './Task'

function TaskList() {
    const tasks=useContext(TaskContext)
  return (
    <div>
        {tasks.map((item,index)=> <Task key={index}  item={item}/>  )}
      
    </div>
  )
}

export default TaskList
