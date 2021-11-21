//MENU
let topMenu = document.getElementById('topMenu');

// let menuBtn = document.getElementById('menuBtn').addEventListener('click', () => {
//     if (topMenu.style.display == '') {
//         topMenu.style.display = 'block'
//     }  
//     else if (topMenu.style.display == 'block') {
//         topMenu.style.display = ''
      
//     }
// });

let cardE = document.getElementById('card-home-e');
let cardResume = document.getElementById('card-home-resume');
let cardWorks = document.getElementById('card-home-works');
let cardContact = document.getElementById('card-home-contact')


//ABOUT
let aboutBtn = document.getElementById('aboutBtn').addEventListener('click', () => {
    // cardResume.classList.replace('hidden', 'active');
    // cardResume.classList.replace('fadeInLeft', 'fadeOutLeft')
    cardE.classList.replace('fadeOutLeft', 'fadeInLeft')
    // cardWorks.classList.replace('active', 'hidden')
    // cardContact.classList.replace('active', 'hidden')
    // cardContact.classList.replace('active', 'hidden')
});

//RESUME
let resumeBtn = document.getElementById('resumeBtn').addEventListener('click', () => {
    
    // cardResume.classList.replace('hidden', 'active')
    cardResume.classList.replace('fadeOutLeft', 'fadeInLeft')
    cardWorks.classList.replace('fadeOutLeft', 'fadeInLeft')
    // cardWorks.classList.replace('active', 'hidden')
    // cardContact.classList.replace('active', 'hidden')
    // cardContact.classList.replace('active', 'hidden')
});

//WORKS
let worksBtn = document.getElementById('worksBtn').addEventListener('click', () => {
    // cardWorks.classList.replace('hidden', 'active')
    // cardWorks.classList.replace('fadeOutLeft', 'fadeInLeft')
    // cardResume.classList.replace('fadeInLeft', 'fadeOutLeft')
    // cardE.classList.replace('fadeInLeft', 'fadeOutLeft')
    // cardContact.classList.replace('active', 'hidden')
});

//CONTACT
let contactBtn = document.getElementById('contactBtn').addEventListener('click', ()=> {
    // cardContact.classList.replace('hidden', 'active');
    cardContact.classList.replace('fadeOutLeft', 'fadeInLeft')
})


/// quitar media queries
var x = window.matchMedia("(max-width: 1120px)")

if (x.matches) { // If media query matches
    console.log('mq funcionando')
    cardE.classList.remove ('fadeInLeft');
    cardE.classList.remove ('fadeOutLeft');
    cardResume.classList.remove ('fadeInLeft');
    cardResume.classList.remove ('fadeOutLeft');
    cardWorks.classList.remove ('fadeInLeft');
    cardWorks.classList.remove ('fadeOutLeft');
    cardContact.classList.remove ('fadeInLeft');
    cardContact.classList.remove ('fadeOutLeft');
} 
    // else {
    //   document.body.style.backgroundColor = "pink";
    // }
  
 
///////scroll suave    
const links = document.querySelectorAll(".menu-main-menu-container ul a");


for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
    behavior: "smooth"
    });
}

const btnUp = document.getElementById("float2")

btnUp.scrollIntoView({block: "end", behavior: "smooth"});