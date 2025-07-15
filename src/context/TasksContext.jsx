import { createContext, useReducer } from "react";
import taskReducer from "../components/reducer/taskReducer";
import { initialTasks } from "../data/tasks";
export const TaskContext=createContext(null);
export const TaskDispatchContext=createContext(null)

export function TaskProvider({children}){
        const[tasks,dispatch]=useReducer(taskReducer,initialTasks)

    return(
        <TaskContext.Provider value={tasks}>
           <TaskDispatchContext.Provider value={dispatch}>
               {children}
            </TaskDispatchContext.Provider> 
        </TaskContext.Provider>
    )
}