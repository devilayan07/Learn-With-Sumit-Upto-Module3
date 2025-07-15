import React, { useState } from 'react'

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];


function Artist() {
    const[artist,setArtist]=useState(initialArtists)

  return (
    <>
    <ul>
        {
           artist.map((item)=> <li key={item?.id}>{item?.name}

           <button onClick={()=>{
             
            //  setArtist(artist.filter((a)=>a?.id!==item?.id))
            const filterArray=artist.filter((a)=>a?.id!==item?.id)
            setArtist(filterArray)
           }}>Delete</button>
           </li>   )
        }
    </ul>
      
    </>
  )
}

export default Artist
