import React, { useState } from 'react'
import "../../style.css"

function Counter() {
    const[score,setScore]=useState(0)
    const[hover,setHover]=useState(false)

    let className="counter"
    if(hover){
        className += "hover"
    }
  return (
    <div
     className={className}
     onPointerEnter={()=>setHover(true)}
     onPointerLeave={()=>setHover(false)}
    
    >
        <h1>{score}</h1>
        <button onClick={()=>setScore(score+1)}>Add One</button>
      
    </div>
  )
}

export default Counter
