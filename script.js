function animateValue (element, start, end, duration){
    let current =start;
    const range = end - start;
    const increament = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval (()  =>{
        current  += increament;
        element.textContent = current;
        if(current===end){
                clearInterval(timer);
            }
    },stepTime);
}

function startCounter(){
    const counterElements = document.querySelectorAll('.counter-value');
    counterElements.forEach((element)=>{
        const target = parseInt (element.getAttribute('data-target'));
        animateValue(element, 0, target, 1500)
    });
}
//  ---- on scroll 

window.addEventListener('scroll', () => {
    const counterSection = document.querySelector('.counter');
    const counterSectionTop = counterSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
        if(counterSectionTop < windowHeight){
            startCounter();
            window.removeEventListener('scroll',startCounter )   
        }

});