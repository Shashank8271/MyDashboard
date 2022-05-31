import React from 'react'
import './Popup.css'
import Placehold from './Placehold'

export default function Popup(props) {
  return (props.trigger) ?(
    <>
    <div className="form-pop">
    <div className='form1-pop'></div>
    <div className='Form2-pop'><button onClick={()=> props.setTrigger(false)}>close</button></div>
    {props.children}
    </div>
    <Placehold />
    </>
  ) : "";
}
