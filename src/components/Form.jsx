import React, { useState } from 'react'

function Form() {
    const[person,setPerson]=useState({
        firstName:"Ayan",
        lastName:"Samaddar",
        email:"devilayan07@yopmail.com"
    })

    // const handleFirstNameChange=(e)=>{
    //     setPerson({
    //         ...person,firstName:e.target.value
    //     })

    // }

    //     const handleLastNameChange=(e)=>{
    //     setPerson({
    //         ...person,lastName:e.target.value
    //     })

    // }

    //     const handleEmailChange=(e)=>{
    //     setPerson({
    //         ...person,email:e.target.value
    //     })

    // }

  const handleChange=(e)=>{
    setPerson({
        ...person,
        [e.target.name]:e.target.value
    })

  }


  return (
   
    <>
    <label htmlFor="">First Name:
        <input type="text" name="firstName" value={person.firstName} onChange={handleChange} />

    </label>

        <label htmlFor="">Last Name:
        <input type="text" name="lastName" value={person.lastName} onChange={handleChange} />

    </label>
        <label htmlFor="">Email:
        <input type="text" name="email" value={person.email} onChange={handleChange} />

    </label>
    
    <p>
        {person.firstName}
        {person.lastName}
        {person.email}
    </p>

    
    
    
    </>
    
  )
}

export default Form
