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

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('user_message');
    
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission (replace with actual email service)
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1500);
  });
}


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
sr.reveal('.project__card, .info__container, .services__item, .contact__form', {interval: 200})
sr.reveal('.skill__card', {interval: 200})

/*=============== SKILLS ANIMATION ===============*/
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill__progress');
  const skillsSection = document.querySelector('.skills__container');
  
  if (!skillsSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = level + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });
  
  observer.observe(skillsSection);
}

// Initialize skill bar animation
document.addEventListener('DOMContentLoaded', animateSkillBars);
