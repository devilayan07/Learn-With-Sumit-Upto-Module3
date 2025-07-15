import React, { useState } from 'react'

function Pointer() {
    const[position,setPosition]=useState({
        x:0,
        y:0
    })

    const handlePointerMove=(e)=>{
        setPosition({
          x:e.clientX,
          y:e.clientY
        })
    }
  return (
    <div  style={{
        position:"relative",
        height:"100vh",
        width:"100vw"
    }}
    onPointerMove={handlePointerMove} 
    >

        <div style={{
            position:"absolute",
            borderRadius:"50%",
            backgroundColor:"red",
            top:-10,
            left:-10,
            height:20,
            width:20,
            transform:`translate(${position.x}px, ${position.y}px)`
        }}>

        </div>
      
    </div>
  )
}

export default Pointer
