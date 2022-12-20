
import React, {  useEffect }  from 'react';

import Header from '../components/Header';
import Content from '../components/Content';
import Profil from '../components/Profil';
import Caroussel from '../components/Caroussel';
import Contact from '../components/Contact';
import initiateAnimation from '../utils/animation';
import attributeRedirect from '../utils/redirect';


// MAIN PAGE
function Main(props) {


    /*
     Prepare all the animation of main page and redirect link on images.
     Activated when data is loaded from json file!
    */
    useEffect( ()=> {
        if ( props.data.length > 0 ){
          initiateAnimation(props.data[2]);
          attributeRedirect();
        }
       
      },[props.data])

    return (
        <>
            <Header/>
            <Content title="Qui je Suis" class="ctn1" svg={props.getSvgBorder(0)}>
                <Profil description={props.data[0]} ratings={props.data[1]}></Profil>
            </Content>
            <Content title="Mes Projets" class="ctn2" svg={props.getSvgBorder(1)}>
                <Caroussel projects={props.data[2]}/>
            </Content>
            <Content title="Contact" class="ctn3">
                <Contact />
            </Content>
        </>  
    )
}

export default Main;