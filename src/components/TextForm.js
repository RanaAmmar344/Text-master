import React, { useState } from 'react';
import PropTypes from 'prop-types'





export default function TextForm(props) {

  


  

    const Capitalize=()=>{
      
    let newText= text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText)
    props.showAlert('converted first upper case','successfuly')
    }


  const handleUpcClick = ()=>{
    console.log("upercase was click" + text)
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert('converted to upper case','successfuly')
    
  
  }

 



 
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert('Clear','successfuly')
    
  }
  
  
  
  const handleonChange = (event)=>{
    console.log("On change")
    setText(event.target.value)
    
  }



  const [text, setText] = useState('');
  return (
   <>

    <div className='container' style={{ color:props.mode ==='dark'?'white':'black'}} >
      <h1> {props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control" value={text}  onChange={handleonChange}  id="mybox" rows="8"></textarea>
</div>
<button className="btn-danger rounded-pill " onClick={handleUpcClick}>Convert Upercase</button>
<button className="btn-danger rounded-pill mx-3" onClick={Capitalize} >First Upercase</button>

<button className="btn-danger rounded-pill mx-3 my-3"onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')} >Copy</button>

<button className="btn-danger mx-2 rounded-circle" onClick={handleclearClick}>Clear</button>

    </div>
    <div className="container my-4" style={{ color :props.mode ==='dark'?'white':'black'}}>
      <h1> Text Counter</h1>
      <p> {text.split(" ").length }word,and {text.length}characters </p>
      <p> {0.008 * text.split("").length} Minutes  </p>
      <h2> Preview </h2>
      <p>{text}</p>

    </div>
    </>
  )
}