import React, { useEffect, useState }  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Profil from './components/Profil';
import Caroussel from './components/Caroussel';
import Contact from './components/Contact';
import Main from './pages/Main';

import getSvgBorder from './utils/bottomBorder';
import getData from './utils/getData';
import initiateAnimation from './utils/animation';



function App() {

  
  const [data,setData]=useState([]);

  useEffect( ()=> {
    async function loadData(){
      const projects = await getData('projets');
      setData([await getData('descri'),await getData('ratings'), projects])
      initiateAnimation(projects)
      
    }
    loadData();
  }, [])

  
  return (
    <Router>
      <Routes>
        <Route path='projets'>
        </Route>
        <Route path='*' element={<Main getSvgBorder={getSvgBorder} data={data}/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
