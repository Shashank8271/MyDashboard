import React, { useState } from 'react'
import Popup from './Popup'



export default function Textbox(props) {
  
const [buttonPopup , setbuttonPopup] =useState(false);
  return ( 
    <div>
   
      <div className="mb-3">
      <button type="button" className="btn btn-primary btn-sm my-3" onClick={()=> setbuttonPopup(true)}> {props.submit}</button>
      <Popup trigger= {buttonPopup} setTrigger={setbuttonPopup}>
      <div>
        
      </div>  
      </Popup>
      </div>
   </div>
  )
};
