import React, { useEffect, useState, useLayoutEffect }  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Main from './pages/Main';
import Projets from './pages/Projets';

import getSvgBorder from './utils/bottomBorder';
import getData from './utils/getData';
import lazyLoading from './utils/lazyLoading';


function App() {

  
  const [data,setData]=useState([]);

  useLayoutEffect( ()=> {
    async function loadData(){
      const projects = await getData('projets');
      setData([await getData('descri'),await getData('ratings'), projects]);

    }
    loadData();
  }, [])

  useEffect( () => {
    lazyLoading();
  }, [data]);

  // Declare your routes
const routes = [
  {
    key : 'projets',
    path : '/projets/:id',
    content : 'Project',
    Component: Projets,
    exact : true
  },
  {
  key : 'main',
  path : '*',
  content : 'Homepage',
  Component: Main,
  exact : true
}]


  return (
    <>

    <Router>
      <Routes>
        {/* <Route path='projets/:id' exact="true">
        </Route>
        <Route path='*' element={<Main getSvgBorder={getSvgBorder} data={data}/>}>
        </Route> */}
      {routes.map(({key, path, content, Component }) => {
        return(
          <Route key={key} path={path} element={
            <div className='page'>
              {content === 'Homepage' ? <Component getSvgBorder={getSvgBorder} data={data}/> : <Component data={data[2]}/>}
            </div>
          }>
          </Route>
        )

      })}
      </Routes>
    </Router>
    </>
  )
}

export default App;
