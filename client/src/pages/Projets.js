
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
                {props.data ? <img className='lazy' data-src={props.data[parseInt(id)].img}></img> : null}
            </div>
            <div className="pp--descri">
                {props.data ? <p> {props.data[parseInt(id)].descri} </p> : null}
            </div>
            <div className="pp--logo">
                {props.data ? showLogo(props.data[parseInt(id)].logo) : null}
            </div>
        </div>
    )
}

export default Projets;