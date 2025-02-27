//Toggling Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav) {
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
      })
  }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.button', {delay: 200} )
sr.reveal('.home-img', {delay: 400} )
sr.reveal('.home-social', {delay: 400,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 200} )
sr.reveal('.about-text', {delay: 400} )

sr.reveal('.services-subtitle', {delay: 100} )
sr.reveal('.services-text', {delay: 150} )
sr.reveal('.services-data', {interval: 200} )

// Function to add the animation class to images when they come into view
function addAnimationClass(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;

      image.classList.add('slide-in');

      // Reset animation after it ends so it can be triggered again
      image.addEventListener('animationend', () => {
        image.classList.remove('slide-in');
      });
    }
  });
}

// observer instance with the option to trigger each time the element comes into view
const observer = new IntersectionObserver(addAnimationClass, {
  threshold: 0.5 , // Trigger when 50% of the element is visible
});
const images = document.querySelectorAll('.services-img');
images.forEach(image => observer.observe(image));
