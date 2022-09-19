import React, { useEffect, useState, useLayoutEffect }  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Main from './pages/Main';

import getSvgBorder from './utils/bottomBorder';
import getData from './utils/getData';
import initiateAnimation from './utils/animation';
import lazyLoading from './utils/lazyLoading';
import attributeRedirect from './utils/redirect';


function App() {

  
  const [data,setData]=useState([]);

  useLayoutEffect( ()=> {
    async function loadData(){
      const projects = await getData('projets');
      setData([await getData('descri'),await getData('ratings'), projects]);

    }
    loadData();
  }, [])

  useEffect( ()=> {
    if ( data.length > 0 ){
      initiateAnimation(data[2]);
      lazyLoading();
      attributeRedirect();
    }
  },[data])

  return (
    <Router>
      <Routes>
        <Route path='projets/:id'>
        </Route>
        <Route path='*' element={<Main getSvgBorder={getSvgBorder} data={data}/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
