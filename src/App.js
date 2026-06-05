
import './App.css';

  import { useState } from 'react';
  import { Route,Routes } from 'react-router-dom';
  import Textform from './Textform';  
  import Navmenu from './Navmenu';
  import About from './About';
  // import Home from './Home';
import Navbar1 from './Navbar1';

  
function App(props) {
  //  const[dark,setDark]=useState(false);
  // const [mode, setMode] = useState('light');
 const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    
 <Navmenu title="Navbar" mode={mode} toggleMode={toggleMode}/>

     <Routes>
   
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Textform" element={<Textform/>}></Route>
        <Route path="/Navbar1" element={<Navbar1/>}></Route>
        
        
    </Routes>
    </>

    
  );
}

export default App;
