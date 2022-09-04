import * as React from 'react';

function Content(props) {
    return(
        <>
        <section className={props.class}>
            <h1>{props.title}</h1>
            {props.children}
            {props.svg}
        </section>
        
        
        </>
    )
}

export default Content;