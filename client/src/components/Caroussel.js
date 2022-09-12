


function Caroussel(props) {
    function loadProjects(){
        if (!props.projects) return;
        return props.projects.slice(0,5).map( (project, idx) => {
            var c = "project--wrapper";
            var style = {};
            var rotation = 0;
            if(idx === 2) {style = {
                top:"25%",
                left:"35%",
                transformOrigin:"center",
                transform: "scale(140%)",
                zIndex:2,
                opacity: 1};
            }
            if(idx === 1) {
                style = {
                    top:"25%",
                    left:"15%",
                    transform: "rotateY(-20deg)",
                    opacity: idx == 0 ? 0 : 0.7
                };
                rotation = -20;
            }
            if(idx === 3) {
                style = {
                    top:"25%",
                    right:"15%",
                    transform: "rotateY(20deg)",
                    opacity: idx == 4 ? 0 : 0.7
                };  
                rotation = 20;
            }
            if(idx === 0) {
                style = {
                    top:"25%",
                    left:"-5%",
                    transform: "rotateY(-40deg)",
                    opacity: 0
                };
                rotation = -40;
            }
            if(idx === 4) {
                style = {
                    top:"25%",
                    right:"-5%",
                    transform: "rotateY(40deg)",
                    opacity: 0
                };
                rotation = 40;
            }
            return (<div data-translate="0" data-rotate={`${rotation}`} style={style} className={c}>
            <img  key={idx} src={project.img}></img>
            <h5>{project.descri}</h5>
            </div>
            )
        })
    }

    return(
        <div className="caroussel">
            {loadProjects()}
            <img className='left arrow' src='arrow-left.png'></img>
            <img className='right arrow' src='arrow-right.png'></img>
        </div>
    )

}

export default Caroussel;