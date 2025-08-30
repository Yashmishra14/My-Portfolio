/*=============== SHOW MENU ===============*/
const navMenu  = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close');

// Show menu
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
function blurHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 50){
    header.classList.add('blur-header')
  } else {
    header.classList.remove('blur-header')
  }
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
// (function() {
//   // Dynamically load EmailJS SDK if it's not already loaded
//   function initEmailJS() {
//     if (typeof emailjs !== 'undefined' && emailjs.init) {
//       emailjs.init("pVqhcDSOwSNJqOCRb"); // initialize with your public key
//     }

//     const form = document.getElementById("contact-form");
//     if (!form) return;

//     form.addEventListener("submit", function(event) {
//       event.preventDefault();

//       if (typeof emailjs === 'undefined' || !emailjs.sendForm) {
//         console.error('EmailJS SDK not loaded.');
//         return;
//       }

//       emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//         .then(function() {
//           alert("Message Sent!");
//           form.reset();
//         }, function(error) {
//           console.error("FAILED...", error);
//         });
//     });
//   }

//   if (typeof emailjs === 'undefined') {
//     const script = document.createElement('script');
//     script.src = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";
//     script.onload = initEmailJS;
//     script.onerror = function() {
//       console.error('Failed to load EmailJS SDK.');
//     };
//     document.head.appendChild(script);
//   } else {
//     initEmailJS();
//   }
// })();


/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  if(this.scrollY >= 350){
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 100,
          sectionId = current.getAttribute('id'),
          sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionLink.classList.add('active')
    } else{
      sectionLink.classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  delay: 200,
  reset: true
})

sr.reveal('.home__img, .home__title, .home__description', {interval: 200})
sr.reveal('.work__card, .info__container, .services__item, .contact__form', {interval: 200})
