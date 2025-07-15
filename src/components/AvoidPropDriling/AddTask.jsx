import { useContext, useState } from "react"
import { TaskContext, TaskDispatchContext } from "../../context/TasksContext"
import { getNextId } from "../../utils/getNextId"

export default function AddTask(){
    const[text,setText]=useState("")
    const dispatch=useContext(TaskDispatchContext)
    const tasks=useContext(TaskContext)
    return (
        <>
        <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>{setText(""),dispatch({
            type:"added",
            text:text,
            id:getNextId(tasks)
        })}}>Add</button>
        </>

    )
}