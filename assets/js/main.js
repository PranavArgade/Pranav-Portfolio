/*=============== SHOW MENU ===============*/

const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        /*=============== MENU SHOW ===============*/
        /* Validate if constant exists */
        if(navToggle){
            navToggle.addEventListener('click', () =>{
                navMenu.classList.add('show-menu')
            })
        }
        /*=============== MENU HIDDEN ===============*/
        /* Validate if constant exists */
        if(navClose){
            navClose.addEventListener('click', () =>{
                navMenu.classList.remove('show-menu')
            })
        }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============
// Get form and input elements
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

// Validate form inputs
const validateForm = () => {
    if (!contactName.value.trim() || !contactEmail.value.trim() || !contactProject.value.trim()) {
        contactMessage.textContent = 'Please fill in all fields.';
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validate email format
    if (!emailRegex.test(contactEmail.value.trim())) {
        contactMessage.textContent = 'Please enter a valid email address.';
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');
        return false;
    }

    return true;
};

// Send email using EmailJS
const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) return;

    // Show a "sending" message
    contactMessage.textContent = 'Sending...';
    contactMessage.classList.remove('color-red');
    contactMessage.classList.add('color-blue');

    // Use EmailJS to send the form
    emailjs
        .sendForm('service_7c6isi1', 'template_n4b2zcq', '#contact-form', 'qXyljYHPiuE6bVrrl')
        .then(() => {
            // On success
            contactMessage.textContent = 'Message sent successfully!';
            contactMessage.classList.remove('color-red');
            contactMessage.classList.add('color-blue');

            // Clear form fields
            contactName.value = '';
            contactEmail.value = '';
            contactProject.value = '';
        })
        .catch((error) => {
            // On failure
            contactMessage.textContent = 'Failed to send message. Please try again.';
            contactMessage.classList.remove('color-blue');
            contactMessage.classList.add('color-red');
            console.error('EmailJS Error:', error);
        })
        .finally(() => {
            // Clear the message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
                contactMessage.classList.remove('color-blue', 'color-red');
            }, 5000);
        });
};

// Add event listener to the form
contactForm.addEventListener('submit', sendEmail);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset 

    sections.forEach(current =>{
 const sectionHeight = current.offsetHeight,
       sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up class
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? nav.classList.add('bg-header') 
                       : nav.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    //reset: true /* Animations repeat */
})

sr.reveal('.home__data, .projects__container')
sr.reveal('.home__info div',{delay:600,origin:'bottom', interval:100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-Child(1)',{origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-Child(2)', {origin: 'right'})
sr.reveal('.qualification__content, .services__card',{interval:100})
