import Navbar from './component/Navbar';
import './App.css';
import Footer from './component/Footer';
import React, { useContext, useState } from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import News_component from './component/News_component';
import News_section from './component/News_section';




function NewsComponentWrapper({con},{abc}) {
        
  const key = `news-component-${con}`;
  
  
  return <News_component key={key} con={con} cat={`${abc}`}/>;
}
function App() {
  
  

  
  const [mode, setMode] = useState('light');
  const [write,setWrite]=useState('Enable DarkMode');
  const [con,setConn]=useState("in");

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      setWrite('Enable DarkMode');
      document.body.style.backgroundColor='white';
    }
    else{setMode('dark');
    setWrite('Enable LightMode');
    document.body.style.backgroundColor='grey';
    }
      }

      
      

  return (
    <>
    <BrowserRouter>

    <Navbar name="News-Bomber" toggleMode={toggleMode} mode={mode} write={write} setConn={setConn}/>
    <Routes>
      <Route exact path='/' element={<News_component key={`general${con}`} con={con} cat="general" mode={mode}/>}/>
      <Route exact path='/business' element={<News_component key={`business${con}`} con={con} cat="business" mode={mode}/>}/>
      <Route exact path='/entertainment' element={<News_component key={`entertainment${con}`} con={con} cat="entertainment" mode={mode}/>}/>
      <Route exact path='/health' element={<News_component key={`health${con}`} con={con} cat="health" mode={mode}/>}/>
      <Route exact path='/science' element={<News_component key={`science${con}`} con={con} cat="science" mode={mode}/>}/>
      <Route exact path='/sports' element={<News_component key={`sports${con}`} con={con} cat="sports" mode={mode}/>}/>
      <Route exact path='/technology' element={<News_component key={`technology${con}`} con={con} cat="technology" mode={mode}/>}/>
    </Routes>

    <Footer mode={mode}/>
    </BrowserRouter>
    </>  );
}

export default App;
