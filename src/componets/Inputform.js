import React from 'react'
import { useState } from 'react'
import "./Inputform.css"

 function Inputform({onSubmission}) {
const [FormData,setFormData]=useState({
  date:"",
description:"",
category:"",
amount:"0"
})
function handleChange(e){
  setFormData({...FormData,[e.target.name]:e.target.value})
}
function handleSubmit(e){
  e.preventDefault()
  onSubmission(FormData)
}
  return (

    <form onChange={handleChange} onSubmit={handleSubmit} id="new-data-form">
      <div className="Inputform">
      <label htmlFor='date'>Date:</label>
      <input type='date' id='date' value={FormData.date} name="date" />
      <input type='text' placeholder='Description' value={FormData.description} name="description" />
      <input type='text' placeholder='Category' value={FormData.category} name="category" />
      <input type='text' placeholder='Amount' value={FormData.amount} name="amount"/> <br />
      
      </div> 
      
      <button type='submit'>Add Transaction</button>
      
    </form>


  )
}

export default Inputform