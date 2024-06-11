AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-quad',
    delay: 100,
  });


const navBlock = document.querySelector('.nav');
const navButton = document.querySelector('.header-burger');
const imageButton = navButton.children[0];
window.addEventListener('load', () => {
    navBlock.style.top = "-300px";
})
navButton.addEventListener('click', () => {
    
    if (navBlock.style.top == "-300px") {
        navBlock.style.top = "0px";
        imageButton.src = "img/close.png";

    } else {
        navBlock.style.top = "-300px";
        imageButton.src = "img/burger.png"
    }
})



