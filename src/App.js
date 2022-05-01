import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";





function App() {



  const [alert, setAlert]= useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  





  const [mode, setMode]= useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode ('dark');
      
      document.body.style.backgroundColor='black'
      showAlert('dark mode is on now','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('light mode in on now','success');
    }
  }

  
  

  


  return (

    <>
   <Router>
       
   <Navbar title="RANA STudio" mode={mode} toggleMode={toggleMode}   />
   

   <Alert Alert={alert} />


   <div className="container my-4">
   
            
   <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
       <TextForm showAlert={showAlert}  heading="Enter The Text To Analyze"  mode={mode}/>
            
          </Route>
        </Switch>
         
        
         
    

   
   </div>
   
   </Router>
  

    </>
    
  );
}

export default App;
