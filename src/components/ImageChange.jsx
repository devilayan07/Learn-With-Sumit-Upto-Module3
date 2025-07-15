import { useState } from "react"
import {sculptureList} from "./data"
export default function ImageChange(){
    const [index,setIndex]=useState(0)
    const[showMore,setShowMore]=useState(false)

    const handleClick=()=>{
        setIndex(index+1)
    }

    const handleDetails=()=>{
        setShowMore(!showMore)
    }

      let sculpture = sculptureList[index];

    return(
        <>

              <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <button onClick={handleDetails}>
        {
            showMore ? "Hide Details " :"Show More"
        }
        </button>
         {
            showMore &&                <p>
        {sculpture.description}
      </p>

         }


        </>

    )
}