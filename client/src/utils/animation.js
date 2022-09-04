
import {
    gsap
} from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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
function initiateAnimation() {
    appear();
    parallaxProfil();
    flipProfil();
    scrollTo();
}

export default initiateAnimation;