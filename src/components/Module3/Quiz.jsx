import { use, useState } from "react"

function submitForm(answer){
  return new Promise((resolve,rejcet)=>{
    setTimeout(()=>{
      if(answer.toLowerCase()==="kolkata"){
        resolve()
      }else{
        rejcet(new Error("Good guess but a wrong answer. Try again!"))
      }
    },3000)
  })
}

export default function Quiz() {

  // visual states :typing,submitting,success
       
  // mandatory data state
  const[answer,setAnswer]=useState("") 
  const[error,setError]=useState(null)

  // visual states theke paoya final state

  const[status,setStatus]=useState("typing")


   if(status==="success") return <h1>Thats Right!</h1>
  const handleTextChange=(e)=>{
    setError(null)
    setAnswer(e.target.value)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setStatus("submitting")
   
    try {
       await submitForm(answer);
       setStatus("success")
    } catch (error) {
      setStatus("typing")
      setError(error?.message)
      
    }
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextChange} disabled={status==="submitting"}/>
        <br />
        <button disabled={answer ==="" || status==="submitting"} >
          Submit
        </button>
         {status==="submitting" && <p>Loading...</p> } 
       {error &&   <p className="Error text-red-400">{error}</p> }  
      </form>
    </>
  )
}
