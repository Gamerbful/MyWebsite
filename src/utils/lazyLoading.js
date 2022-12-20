
// apply lazy loading animation to all .lazy imgs. 
function lazyLoading() {
    const lazyImg = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver(entries => {
        entries.forEach( entry => {
            if ( entry.isIntersecting){
                const img = entry.target;
                const newImg = new Image();
                newImg.src = img.getAttribute('data-src');
                newImg.onload = function()  {
                    img.src = newImg.src;
                    observer.unobserve(img);
                    img.classList.remove('lazy');
                    ;
                }
                
                
            }
        })
    });
    lazyImg.forEach( img => {
        observer.observe(img);
        img.style.backgroundColor = "#222222";
    
    })
   

}

export default lazyLoading;