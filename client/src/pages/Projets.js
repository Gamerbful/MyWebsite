
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

import projectPageAnimation from '../utils/projectPageAnimation';

function Projets(props) {

    const { id } = useParams();

    function attributeRedirect(projet) {
        const logos = document.querySelectorAll('.pp--fixed');
        const [home, github] = logos;
        github.addEventListener('click', (e) => {
            window.open(projet.link, '_blank');
        })
        home.addEventListener('click', (e) => {
            window.location.href = '/';
        })
    }
    useEffect( ()=> {
        if ( props.data ){
            projectPageAnimation();
            attributeRedirect(props.data[parseInt(id)]);
        }
       
      },[props.data])

    function showLogo(logos) {
        console.log(logos);
        return logos.map( (logo,idx) => {
            return (
                <img key={idx} src={logo}></img>
            )
        })
    }
    
    return(
        <div className="project--page">
            <div className="pp--img">
                {props.data ? <><h3>{props.data[parseInt(id)].titre}</h3><img className='lazy' data-src={props.data[parseInt(id)].img}></img></> : null}
            </div>
            <div className="pp--descri">
                {props.data ? <><h1 className='pp--title'>Description</h1><p> {props.data[parseInt(id)].descri} </p></> : null}
            </div>
            <div className="pp--logo">
                {props.data ? <><h1 className='pp--title'>Technos Utilisées</h1><div className='pp--logo--wrapper'>{showLogo(props.data[parseInt(id)].logo)}</div></> : null}
            </div>
            <div className='pp--house pp--fixed'>
                <img alt='house' src='/logo/house.svg'></img>
            </div>
            <div className='pp--github pp--fixed'>
                <img alt='house' src='/logo/github.svg'></img>
            </div>
        </div>
    )
}

export default Projets;