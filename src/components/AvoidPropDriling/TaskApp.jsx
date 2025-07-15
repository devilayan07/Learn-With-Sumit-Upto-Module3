import React, { useReducer } from 'react'
import taskReducer from '../reducer/taskReducer'
import { initialTasks } from '../../data/tasks'
import { TaskContext, TaskDispatchContext, TaskProvider } from '../../context/TasksContext'
import AddTask from './AddTask'
import TaskList from './TaskList'

function TaskApp() {
    // const[tasks,dispatch]=useReducer(taskReducer,initialTasks)




return (
    <div>
        {/* <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                <AddTask/>
                <TaskList/>
            </TaskDispatchContext.Provider>
        </TaskContext.Provider> */}
        <TaskProvider>
            <AddTask/>
            <TaskList/>

        </TaskProvider>
      
    </div>
  )
}

export default TaskApp
