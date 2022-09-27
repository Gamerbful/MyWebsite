
import React from "react";

function Profil(props) {
    let keyA = 0;
    let keyB = 1000;
    function ratingsImg(idx){
        if(!props.ratings) return;
        const filledStarsNumber = props.ratings[idx];
        const unfilledStarsNumber = 5 - props.ratings[idx];
        let res = [];
        
        for(let i=0; i<filledStarsNumber; i++){
            keyA++;
            res.push(<img key={keyA} alt="rating" src="/moon.svg"></img>);
        }
        for(let i=0; i<unfilledStarsNumber; i++){
            res.push(<img key={keyB}  alt="rating" src="/moon2.svg"></img>);
            keyB++;
        }
        return res;
    }
    return (
        <div className="profil--wrapper">
            <div className="profil--card">
            <img className="card front lazy" alt='developpeur' data-src='/moi.png'></img>
            <img className="fliparrow" src='/logo/flipArrow.png'/>
            <div className="card back">
                <div className="title">
                    <h1>Profil Card</h1>  
                </div>
            <h1 className="profil--title"> <img alt='logo' src='/titlePoint.png'></img>Skills</h1>
            <div className="skills--wrapper">
                <span><h3 className="skills--title">JS </h3><div className="rating"> {ratingsImg(0)} </div></span>
                <span><h3 className="skills--title">nodeJS </h3><div className="rating"> {ratingsImg(1)} </div></span>
                <span><h3 className="skills--title">Machine Learning </h3><div className="rating"> {ratingsImg(2)} </div></span>
                <span><h3 className="skills--title">code & algo </h3><div className="rating"> {ratingsImg(3)} </div></span>
                <span><h3 className="skills--title">Animation / 3d </h3><div className="rating"> {ratingsImg(4)} </div></span>
            </div>
            <h1 className="profil--title"> <img alt='logo' src='/titlePoint.png'></img>Langages Utilisés</h1>
            <div className="logo--wrapper">
                <img alt='logo' src="/logo/js.svg"></img>
                <img alt='logo' src="/logo/html.svg"></img>
                <img alt='logo' src="/logo/nodejs.svg"></img>
                <img alt='logo' src="/logo/css.svg"></img>
                <img alt='logo' src="/logo/python.svg"></img>
                <img alt='logo' src="/logo/react.svg"></img>
            </div>
            </div>
            </div>
            <p>
                {props.description}
            </p>
        </div>

    )
}

export default Profil;