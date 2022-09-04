import React, { useEffect, useState }  from 'react';

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Profil from './components/Profil';
import Caroussel from './components/Caroussel';

import getSvgBorder from './utils/bottomBorder';
import getData from './utils/getData';
import initiateAnimation from './utils/animation';



function App() {
  useEffect( () => {
    initiateAnimation();
  });
  
  const [data,setData]=useState([]);

  useEffect( ()=> {
    async function loadData(){
      setData([await getData('descri'),await getData('ratings'), await getData('projets')]);
    }
    loadData();
  }, [])
  return (
  <>
  <Header/>
  <Content title="About Me" class="ctn1" svg={getSvgBorder(0)}>
    <Profil description={data[0]} ratings={data[1]}></Profil>
  </Content>
  <Content title="My Projects" class="ctn2" svg={getSvgBorder(1)}>
    <Caroussel projets={data[2]}/>
  </Content>
  <Content title="Contact" class="ctn3"/>
  </>
  )
}

export default App;
