import React, { useState } from 'react'

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];


function ReverseArray() {
    const[list,setList]=useState(initialList)

    const handleClick=()=>{
        const b=[...list]
        b.reverse()
        setList(b)
    }
  return (
    <>

    <button onClick={handleClick}>Reverse</button>
    <ul>
        {
            list?.map((item,index)=> <li key={item?.id}>
              {item?.title}
            </li>  )
        }
    </ul>
      
    </>
  )
}

export default ReverseArray
