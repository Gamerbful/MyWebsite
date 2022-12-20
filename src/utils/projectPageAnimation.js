import gsap from "gsap";

//appear animation for project page
function appear() {
    const hero = document.querySelector('.pp--img');
    const heroImg = document.querySelector('.pp--img img');
    const descriAera = document.querySelector('.pp--descri');
    const logoAera = document.querySelector('.pp--logo');
    const fixedButton = document.querySelectorAll('.pp--fixed');

    const timeline = gsap.timeline( {defaults: {duration: 1.4 }});

    timeline
    .fromTo(hero, {y:'-100%'},{y:'0%',opacity:1})
    .fromTo(descriAera, {x:'-120%'},{x:'0%',opacity:1},'<')
    .fromTo(logoAera, {x:'120%'},{x:'0%',opacity:1},'<')
    .fromTo(heroImg, {opacity:0}, {opacity:1})
    .fromTo(fixedButton, {opacity:0}, {opacity:1, stagger:.3})
}


function projectPageAnimation() {
    appear();
}

export default projectPageAnimation;