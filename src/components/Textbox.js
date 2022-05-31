import React, {useState} from 'react'


export default function Textbox(props) {
 
const [text, setText] = useState('Enter anything');

const handleUpClick = () =>{
  console.log("handle up click");
let newText = text.toUpperCase();
  setText(newText)
}
const handleOnchange=(event)=>{
  console.log("onChnge");
  setText(event.target.value)
}

  return (
    <div>
   
      <div className="mb-3">
      <button type="button" className="btn btn-primary btn-sm my-3" onClick={handleUpClick}>{props.submit}</button>
      <textarea className="form-control" id="exampleFormControlTextarea1" value= {text}  onChange= {handleOnchange} rows="8"></textarea>
     
      </div>
   </div>
  )
};
