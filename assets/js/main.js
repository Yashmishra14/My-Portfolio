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

/*=============== SEE MORE FUNCTIONALITY ===============*/
let isExpanded = false;
const initialProjectsToShow = 3;

function initializeSeeMore() {
  const seeMoreBtn = document.getElementById('see-more-btn');
  const projectCards = document.querySelectorAll('.project__card');
  
  console.log('See More Button:', seeMoreBtn);
  console.log('Project Cards:', projectCards.length);
  
  if (!seeMoreBtn || !projectCards.length) {
    console.error('See More button or project cards not found');
    return;
  }
  
  // Hide projects beyond the initial count
  projectCards.forEach((card, index) => {
    if (index >= initialProjectsToShow) {
      card.classList.add('hidden');
      console.log('Hiding project card:', index);
    }
  });
  
  // Add click event listener
  seeMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Button clicked!');
    toggleSeeMore();
  });
  console.log('See More functionality initialized');
}

function toggleSeeMore() {
  console.log('Toggle See More clicked');
  
  const seeMoreBtn = document.getElementById('see-more-btn');
  const projectCards = document.querySelectorAll('.project__card');
  
  if (!seeMoreBtn) {
    console.error('See More button not found');
    return;
  }
  
  if (!projectCards.length) {
    console.error('No project cards found');
    return;
  }
  
  isExpanded = !isExpanded;
  console.log('New state - isExpanded:', isExpanded);
  
  if (isExpanded) {
    // Show all projects
    console.log('Showing all projects');
    projectCards.forEach((card, index) => {
      if (index >= initialProjectsToShow) {
        console.log('Removing hidden class from card:', index);
        card.classList.remove('hidden');
      }
    });
    
    // Update button text and icon
    const buttonText = seeMoreBtn.querySelector('span');
    const buttonIcon = seeMoreBtn.querySelector('i');
    
    if (buttonText) buttonText.textContent = 'See Less';
    if (buttonIcon) {
      buttonIcon.className = 'fas fa-chevron-up';
      seeMoreBtn.classList.add('expanded');
    }
  } else {
    // Hide projects beyond initial count
    console.log('Hiding projects beyond initial count');
    projectCards.forEach((card, index) => {
      if (index >= initialProjectsToShow) {
        console.log('Adding hidden class to card:', index);
        card.classList.add('hidden');
      }
    });
    
    // Update button text and icon
    const buttonText = seeMoreBtn.querySelector('span');
    const buttonIcon = seeMoreBtn.querySelector('i');
    
    if (buttonText) buttonText.textContent = 'See More';
    if (buttonIcon) {
      buttonIcon.className = 'fas fa-chevron-down';
      seeMoreBtn.classList.remove('expanded');
    }
  }
}

// Smooth scroll for read more button clicks
function smoothScrollToProject(projectCard) {
  projectCard.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// Enhanced project card interactions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize see more functionality
  initializeSeeMore();
  
  // Initialize scroll animations
  initializeScrollAnimations();
  
  // Initialize scroll indicator
  initializeScrollIndicator();
  
  // Initialize theme toggle
  initializeThemeToggle();
  
  // Initialize contact form
  initializeContactForm();
});

// Initialize all project details to collapsed state
function initializeProjectDetails() {
  const allProjectDetails = document.querySelectorAll('.project__details');
  const allReadMoreBtns = document.querySelectorAll('.read-more-btn');

  allProjectDetails.forEach((details, index) => {
    details.classList.remove('expanded');
    console.log('Initialized project details:', details.id);
  });

  allReadMoreBtns.forEach((btn, index) => {
    btn.textContent = 'Read More';
    btn.style.background = 'linear-gradient(135deg, #00d1ff, #4ddbff)';
  });
}

/*=============== SCROLL ANIMATIONS ===============*/
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Initialize scroll animations
function initializeScrollAnimations() {
  // Observe section titles
  const sectionTitles = document.querySelectorAll('.section__title');
  sectionTitles.forEach(title => {
    observer.observe(title);
  });

  // Observe project cards
  const projectCards = document.querySelectorAll('.project__card');
  projectCards.forEach((card, index) => {
    card.classList.add('fade-in-up');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe skill cards
  const skillCards = document.querySelectorAll('.skill__card');
  skillCards.forEach((card, index) => {
    card.classList.add('scale-in');
    card.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(card);
  });

  // Observe experience items
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach((item, index) => {
    item.classList.add('fade-in-left');
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
  });

  // Observe about section
  const aboutContent = document.querySelectorAll('.home__content, .home__img-wrapper');
  aboutContent.forEach((element, index) => {
    if (index % 2 === 0) {
      element.classList.add('fade-in-left');
    } else {
      element.classList.add('fade-in-right');
    }
    observer.observe(element);
  });

  // Observe contact form
  const contactDescription = document.querySelector('.contact__description');
  const contactForm = document.querySelector('.contact__form');
  
  if (contactDescription) {
    observer.observe(contactDescription);
  }
  
  if (contactForm) {
    observer.observe(contactForm);
  }
}

// Smooth scroll for scroll indicator
function initializeScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}

/*=============== THEME TOGGLE ===============*/
function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);
  
  // Update icon based on current theme
  updateThemeIcon(savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add transition effect
    body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      body.style.transition = '';
    }, 300);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  
  if (theme === 'dark') {
    icon.className = 'ri-sun-line';
  } else {
    icon.className = 'ri-moon-line';
  }
}

/*=============== CONTACT FORM ===============*/
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  const inputs = form.querySelectorAll('.contact__input');
  
  // Add floating label effect
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
    
    // Real-time validation
    input.addEventListener('input', () => {
      validateField(input);
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmission(form);
  });
}

function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  
  // Remove previous validation classes
  field.classList.remove('error', 'success');
  
  // Validation rules
  switch (fieldName) {
    case 'user_name':
      isValid = value.length >= 2;
      break;
    case 'user_email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
      break;
    case 'user_message':
      isValid = value.length >= 10;
      break;
  }
  
  if (isValid) {
    field.classList.add('success');
  } else {
    field.classList.add('error');
  }
  
  return isValid;
}

function handleFormSubmission(form) {
  const inputs = form.querySelectorAll('.contact__input');
  let isFormValid = true;
  
  // Validate all fields
  inputs.forEach(input => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });
  
  if (isFormValid) {
    // Show success message
    showSuccessMessage();
    form.reset();
    
    // Remove validation classes
    inputs.forEach(input => {
      input.classList.remove('error', 'success');
    });
  } else {
    // Focus first invalid field
    const firstError = form.querySelector('.contact__input.error');
    if (firstError) {
      firstError.focus();
    }
  }
}

function showSuccessMessage() {
  const form = document.getElementById('contact-form');
  let successMsg = form.querySelector('.success-message');
  
  if (!successMsg) {
    successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Thank you! Your message has been sent successfully.';
    form.appendChild(successMsg);
  }
  
  successMsg.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 3000);
}
