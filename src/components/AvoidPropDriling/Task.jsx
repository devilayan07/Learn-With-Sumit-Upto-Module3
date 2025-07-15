import React, { useContext, useState } from 'react'
import { TaskDispatchContext } from '../../context/TasksContext'

function Task({item}) {
    const[editMode,setEditMode]=useState(false)
    const dispatch=useContext(TaskDispatchContext)
    console.log(item,"item")
    
  return (
    <div>
        <label htmlFor="">

                    <input type="checkbox" checked={item.done} onChange={(e)=>{
                        dispatch({
                            type:"changeTask",
                            task:{
                                ...item,
                                done:e.target.checked
                            }
                        })
                    }}/>
        {editMode ? <input type="text" value={item.text} onChange={(e)=>      dispatch({
        type:"changeTask",
        task:{
            ...item,
            text:e.target.value
        }
        

      })
}/> :<li>{item.text}</li>  }
      {editMode ? <button onClick={()=>setEditMode(false)} >Save</button> :<button onClick={()=>setEditMode(true)}>Edit</button> } 
      <button onClick={()=>    dispatch({
      type:"deleted",
      id:item.id
    })
}>Delete</button>     

            
        </label>
    
    </div>
  )
}

export default Task
