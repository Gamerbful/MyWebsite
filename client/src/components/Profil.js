
import React from "react";

function Profil(props) {
    function ratingsImg(idx){
        if(!props.ratings) return;
        const filledStarsNumber = props.ratings[idx];
        const unfilledStarsNumber = 5 - props.ratings[idx];
        const filledMoon = <img alt="rating" src="moon.svg"></img>;
        const unfilledMoon = <img alt="rating" src="moon2.svg"></img>;
        let res = [];
        for(let i=0; i<filledStarsNumber; i++){
            res.push(filledMoon);
        }
        for(let i=0; i<unfilledStarsNumber; i++){
            res.push(unfilledMoon);
        }
        return res;
    }
    return (
        <div className="profil--wrapper">
            <div className="profil--card">
            <img className="card front" alt='developpeur' src='bryan.jpg'></img>
            <div className="card back">
                <div className="title">
                    <h1>Profil Card</h1>  
                </div>
            <h1 className="profil--title"> <img alt='logo' src='titlePoint.png'></img>Skills</h1>
            <div className="skills--wrapper">
                <span><h3 className="skills--title">Agility </h3><div className="rating"> {ratingsImg(0)} </div></span>
                <span><h3 className="skills--title">Adaptability </h3><div className="rating"> {ratingsImg(1)} </div></span>
                <span><h3 className="skills--title">Logic </h3><div className="rating"> {ratingsImg(2)} </div></span>
                <span><h3 className="skills--title">Listening </h3><div className="rating"> {ratingsImg(3)} </div></span>
                <span><h3 className="skills--title">Communication </h3><div className="rating"> {ratingsImg(4)} </div></span>
            </div>
            <h1 className="profil--title"> <img alt='logo' src='titlePoint.png'></img>Languages Used</h1>
            <div className="logo--wrapper">
                <img alt='logo' src="logo/js.png"></img>
                <img alt='logo' src="logo/htmlcss.png"></img>
                <img alt='logo' src="logo/nodejs.png"></img>
                <img alt='logo' src="logo/php.png"></img>
                <img alt='logo' src="logo/python.png"></img>
                <img alt='logo' src="logo/react.png"></img>
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