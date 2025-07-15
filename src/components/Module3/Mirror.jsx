import React, { useState } from 'react'

function Mirror({messageColor}) {
    const[color,setColor]=useState(messageColor)
    const handleChangeColor=()=>{
        setColor("blue")
    }
  return (
    <div>
      <div style={{color:color}}>Hello World</div>
      <br />
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  )
}

export default Mirror
