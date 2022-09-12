
import {
    gsap
} from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


/*
    remove last project div and add the next div
*/
function removeLastadd(aera,projects,project,direction) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var h5 = document.createElement('h5');
    h5.innerText = project.descri;
    img.src=project.img;
    div.className = 'project--wrapper';
    div.appendChild(img);
    div.appendChild(h5);
    div.setAttribute('data-translate',0);
    div.style.opacity = 0;
    div.style.top = "25%";
    
    if( !direction ) {
        projects[4].remove();
        div.style.left = "-5%";
        div.style.transform = "rotateY(-40deg)";
        div.setAttribute('data-rotate',-40);
        aera.insertBefore(div, aera.firstChild);
    }
    else {
        projects[0].remove();
        div.style.right = "-5%";
        div.style.transform = "rotateY(40deg)";
        div.setAttribute('data-rotate',40);
        aera.appendChild(div);
    }

    return document.querySelectorAll('.project--wrapper');
}

function setProjectsAttribute(projects,direction){
    if (direction) {
        projects.forEach(
            (project) => {
                project.setAttribute('data-translate',parseInt(project.getAttribute('data-translate'))-67);
                project.setAttribute('data-rotate',parseInt(project.getAttribute('data-rotate'))-20);
            }
        ) 
    }
    else {
        projects.forEach(
            (project) => {
                project.setAttribute('data-translate',parseInt(project.getAttribute('data-translate'))+67);
                project.setAttribute('data-rotate',parseInt(project.getAttribute('data-rotate'))+20);
            }
        )
}
}

function refreshIdx(direction, idx,n) {
        if (!direction) {
            const newLeftIdx = (idx.leftIdx - 1);
            return {leftIdx: newLeftIdx === -1 ? n-1 : newLeftIdx  , rightIdx: idx.rightIdx - 1 === -1 ? n-1 : idx.rightIdx - 1}
        }
        const newRightIdx = (idx.rightIdx + 1);
        return {leftIdx: (idx.leftIdx + 1) % n  , rightIdx: (newRightIdx) % n }


}

function carousselSwiper(projects, timeline, direction, idx, n, data){
    if ( !direction ) {
        timeline
        .to(projects[0], { opacity:0.7, translateX:`${projects[0].getAttribute('data-translate')}%` ,rotateY:`${projects[0].getAttribute('data-rotate')}`})
        .to(projects[1], { scale:1.4, translateX:`${projects[1].getAttribute('data-translate')}%`,rotateY:`${projects[1].getAttribute('data-rotate')}`, opacity: 1,zIndex:2},'<')
        .to(projects[2], {scale:1,translateX:`${projects[2].getAttribute('data-translate')}%`,rotateY:`${projects[2].getAttribute('data-rotate')}`, opacity: 0.7,zIndex:1},'<' )
        .to(projects[3], {scale: 0.7, translateX:`${projects[3].getAttribute('data-translate')}%`,rotateY:`${projects[3].getAttribute('data-rotate')}`, opacity: 0},'<' )
        .to(projects[4], {translateX:`67%`, opacity: 0,rotateY:`${projects[4].getAttribute('data-rotate')}` },'<' )
    }
    else {
        timeline
        .to(projects[4], { opacity:0.7, translateX:`${projects[4].getAttribute('data-translate')}%`,rotateY:`${projects[4].getAttribute('data-rotate')}`})
        .to(projects[3], { scale:1.4, translateX:`${projects[3].getAttribute('data-translate')}%`, opacity: 1,zIndex:2,rotateY:`${projects[3].getAttribute('data-rotate')}`},'<')
        .to(projects[2], {scale:1,translateX:`${projects[2].getAttribute('data-translate')}%`, opacity: 0.7,zIndex:1,rotateY:`${projects[2].getAttribute('data-rotate')}`},'<' )
        .to(projects[1], {scale: 0.7, translateX:`${projects[1].getAttribute('data-translate')}%`, opacity: 0,rotateY:`${projects[1].getAttribute('data-rotate')}`},'<' )
        .to(projects[0], {translateX:`-67%`, opacity: 0,rotateY:`${projects[0].getAttribute('data-rotate')}`},'<' )
    }

    timeline.eventCallback('onComplete',() => {
        var aera = document.querySelector('.caroussel');
        var projects = document.querySelectorAll('.project--wrapper');
        var nextIdx = 0;
        if(!direction) nextIdx = idx.leftIdx;
        else nextIdx = idx.rightIdx;
        
        removeLastadd(aera,projects,data[nextIdx],direction);
    });
}

function caroussel(data) {
    const n = data.length;
    var idx = {leftIdx: n - 1, rightIdx: 5}
    const rightArrow = document.querySelector('.right');
    const leftArrow = document.querySelector('.left');
    const timeline = gsap.timeline( {defaults: {duration:.325 }})

    leftArrow.addEventListener('click', (e) => {
        if (timeline.isActive()) return;
        var projects = document.querySelectorAll('.project--wrapper');
        setProjectsAttribute(projects, false);
        projects = document.querySelectorAll('.project--wrapper');
        carousselSwiper(projects, timeline, false, idx, n, data);
        idx = refreshIdx(false,idx,n);
        
    })

    rightArrow.addEventListener('click', (e) => {
        if (timeline.isActive()) return;
        var projects = document.querySelectorAll('.project--wrapper');
        setProjectsAttribute(projects, true);
        projects = document.querySelectorAll('.project--wrapper');
        carousselSwiper(projects, timeline, true, idx, n, data);
        idx = refreshIdx(true,idx,n);
        
    })
}
function scrollTo() {
    const contactButton = document.querySelector('.one');
    const contactSection = document.querySelector('.ctn3')
    contactButton.addEventListener('click', (e) => {
        gsap.to(window, {duration: .9, delay:.1, scrollTo:contactSection})
    })

    const projectButton = document.querySelector('.two');
    const projectSection = document.querySelector('.ctn2')
    projectButton.addEventListener('click', (e) => {

        gsap.to(window, {duration: .9, delay:.1, scrollTo:projectSection})
    })
}
function flipProfil() {
    const timeline = gsap.timeline({ defaults: { duration: 1 }});
    const timeline2 = gsap.timeline({ defaults: { duration: 1 }});
    const cards = document.querySelectorAll('.card');
    const cardWrapper = document.querySelector('.profil--card')
    const front = cards[0];
    const back = cards[1];
    let swap = false;
    cardWrapper.addEventListener('click', (e) => {
        if( timeline.isActive() || timeline2.isActive() ) return;
        if (!swap){
            timeline
            .to(front,{rotateY:-180})
            .to(back,{rotateY:0 },'<' )
            swap = !swap;
        }
        else {
            timeline2
            .to( back,{rotateY:180})
            .to(front,{rotateY:0 },'<' )
            
            swap = !swap;
        }
    })
}
function parallaxProfil() {
    const element = document.querySelector('.profil--card'); // we will call our id from html with this parameter
    const root = document.querySelector('#root');
    const mouse = {
        x: 0,
        y: 0
      };
    const mouseMoveHandler = (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    }
    const speed = 0.7;
    const xSet = gsap.quickSetter(element, "x", "px");
    const ySet = gsap.quickSetter(element, "y", "px");
    root.onmousemove = mouseMoveHandler;
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, 60);
        
        xSet(-0.01 * mouse.x * dt)
        ySet(-0.03 * mouse.y * dt)
      });
}

function appear() {
    const p = document.querySelector('p');
    const observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            if (entry.isIntersecting) {
                gsap.fromTo("p", {opacity: 0, x: '-10%'}, {duration: 3, opacity: 1.5, x:'0%'});
                observer.unobserve(entry.target);
            }
        })

    },
    {
        threshold: 0.6
    })
    observer.observe(p);
  
}
function initiateAnimation(data) {
    appear();
    parallaxProfil();
    flipProfil();
    scrollTo();
    caroussel(data);
}

export default initiateAnimation;