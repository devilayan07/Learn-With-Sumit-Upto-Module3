import { useState } from "react"

export default function Task({item,onChangeTask,onDelete}){
    console.log(item,"item")
    const[editMode,setEditMode]=useState(false)

    let taskContent;

    if(editMode){
        taskContent=(
            <>
            <input value={item?.text} onChange={(e)=>onChangeTask({
                ...item,text:e.target.value
            })} />
            <button onClick={()=>setEditMode(false)}>Save</button>

            </>
        )

    }else{

        taskContent=(
            <>
            {item.text}
            <button onClick={()=>setEditMode(true)}>Edit</button>

            </>
        )


    }
    return(
                    <li>
                <label>
                    <input type="checkbox" checked={item.done} onChange={(e)=>onChangeTask({
                        ...item,done:e.target.checked

                    })}/>

                       {/* {editMode ? <input value={item.text} />: (<>{item.text}</>) }
                    {editMode ?<button onClick={()=>setEditMode(false)}>Save</button> :<button onClick={()=>setEditMode(true)}>Edit</button>} */}
                    {taskContent}
                    <button onClick={()=>onDelete(item.id)}>Delete</button>
                </label>
            </li>

    )
}