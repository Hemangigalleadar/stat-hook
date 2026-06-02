import logo from './logo.svg';
import './App.css';
import TextForm from './Textform';
import { useState } from 'react';


function App(props) {
  const[dark,setDark]=useState(false);

  return (
    <>
    <TextForm dark={dark}/>
    
    
    </>
  );
}

export default App;
