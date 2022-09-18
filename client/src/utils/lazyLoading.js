import { FastAverageColor } from 'fast-average-color';

function lazyLoading() {
    console.log("yeah");
    const lazyImg = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver(entries => {
        entries.forEach( entry => {
            if ( entry.isIntersecting){
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        })
    });
    console.log(lazyImg);
    lazyImg.forEach( img => {
        observer.observe(img);
        img.style.backgroundColor = "#222222";
    
    })
   

}

export default lazyLoading;