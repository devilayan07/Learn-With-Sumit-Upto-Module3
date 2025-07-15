import React, { useState } from 'react'

function FeedBackForm() {
    const[inputs,setInputs]=useState([{
        id:1,
        label:"input"
    }])

   const handleAddInput=()=>{
    const nextId=inputs[inputs.length-1].id+1
     setInputs([
        ...inputs,{
            id:nextId,
            label:"input"
        }
     ])
   }
  return (
    <div>
       {
        inputs.map((item)=>  <div key={item?.id} style={{marginBottom:"5px"}}>
            <input type="text"  label={item.label}/>
        </div>   )
       }
     <div style={{marginTop:"20px"}}>
    <button onClick={handleAddInput}>Add Input</button>

     </div>
      
    </div>
  )
}

export default FeedBackForm
