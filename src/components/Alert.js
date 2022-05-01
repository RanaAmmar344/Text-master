import React, { useState } from 'react'


export default function Alert(props) {
  
  const Capitalize=(word)=>{
    const lower= word.toLowerCase ();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
    }


    
    
  return (
   props.Alert && <div className="alert alert-success alert-dismissible fade show " role="alert">
   <strong> { Capitalize(props.Alert.type)} </strong> :   {Capitalize(props.Alert.msg)}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
