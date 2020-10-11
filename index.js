//MENU
let topMenu = document.getElementById('topMenu');

let menuBtn = document.getElementById('menuBtn').addEventListener('click', () => {
    if (topMenu.style.display == '') {
        topMenu.style.display = 'block'
    }  
    else if (topMenu.style.display == 'block') {
        topMenu.style.display = ''
      
    }
});

let cardE = document.getElementById('card-home-e');
let cardResume = document.getElementById('card-home-resume');

//ABOUT
let aboutBtn = document.getElementById('aboutBtn').addEventListener('click', () => {
    cardResume.classList.replace('hidden', 'active');
    cardResume.classList.replace('fadeInLeft', 'fadeOutLeft')
    cardE.classList.replace('fadeOutLeft', 'fadeInLeft')
});

//RESUME
let resumeBtn = document.getElementById('resumeBtn').addEventListener('click', () => {
    
    cardResume.classList.replace('hidden', 'active')
    cardE.classList.replace('fadeOutLeft', 'fadeInLeft')
    cardResume.classList.replace('fadeOutLeft', 'fadeInLeft')
});

/// quitar media queries
var x = window.matchMedia("(max-width: 1120px)")

if (x.matches) { // If media query matches
    console.log('mq funcionando')
    cardResume.classList.remove ('fadeInLeft')
    cardResume.classList.remove ('fadeOutLeft')
} 
    // else {
    //   document.body.style.backgroundColor = "pink";
    // }
  
  
