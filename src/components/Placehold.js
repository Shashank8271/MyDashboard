import React from 'react'
import './Placeholder.css'

export default function Placehold() {
  return (
    <>
    <div classNameName="card">
    <h5>Winter Training Schedule</h5>
    <p> 4 weeks | 12 Sessons</p>
  
    <div classNameName="card-body">
      
      <p classNameName="card-text">Some card's content.</p>
    
    </div>
  </div>
  
  <div classNameName="card" aria-hidden="true">

    <div classNameName="card-body">
      <h6 classNameName="card-title placeholder-glow">
        Start date
      </h6>
      <form>

       <div id="InContent"> <input  type="text" /></div>
       <div id="InContent"> <input  type="text" /></div>
       
       <button type='submit'>Update</button>
       
      </form>
    
    <div></div>
    </div>
  </div></>
  )
}
