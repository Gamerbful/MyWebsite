
import {useParams} from 'react-router-dom';

function Projets(props) {

    const { id } = useParams();

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
            <div className='pp--house'>
                <img alt='house' src='/logo/house.svg'></img>
            </div>
        </div>
    )
}

export default Projets;