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

//image changing
// Array of image paths for the fashion shoots section
const fashionShootImages = [
  'images/fashion1.png',
  'images/fashion2.jpg',
  'images/fashion3.jpg'
];

// Array of image paths for the editorial section
const editorialImages = [
  'images/editorial1.jpg',
  'images/editorial2.jpg',
  'images/editorial3.jpg'
];

// Array of image paths for the portfolio section
const portfolioImages = [
  'images/portfolio1.png',
  'images/portfolio2.png',
  'images/portfolio3.png'
];

// Function to change the image in the fashion shoots section
let currentFashionShootIndex = 0;
const fashionShootImageElement = document.getElementById('fashion-shoot-image');

function changeFashionShootImage() {
  // Add 'hidden' class for transition
  fashionShootImageElement.classList.add('hidden');

  // Wait for the transition to finish before changing the image
  setTimeout(() => {
    currentFashionShootIndex = (currentFashionShootIndex + 1) % fashionShootImages.length; // Cycle through the images
    fashionShootImageElement.src = fashionShootImages[currentFashionShootIndex]; // Change image source
    fashionShootImageElement.classList.remove('hidden'); // Remove 'hidden' class for fade-in effect
  }, 1000); // Timeout duration matches transition duration
}

// Function to change the image in the editorial section
let currentEditorialIndex = 0;
const editorialImageElement = document.getElementById('editorial-image');

function changeEditorialImage() {
  // Add 'hidden' class for transition
  editorialImageElement.classList.add('hidden');

  // Wait for the transition to finish before changing the image
  setTimeout(() => {
    currentEditorialIndex = (currentEditorialIndex + 1) % editorialImages.length; // Cycle through the images
    editorialImageElement.src = editorialImages[currentEditorialIndex]; // Change image source
    editorialImageElement.classList.remove('hidden'); // Remove 'hidden' class for fade-in effect
  }, 1000); // Timeout duration matches transition duration
}

// Function to change the image in the portfolio section
let currentPortfolioIndex = 0;
const portfolioImageElement = document.getElementById('portfolio-image');

function changePortfolioImage() {
  // Add 'hidden' class for transition
  portfolioImageElement.classList.add('hidden');

  // Wait for the transition to finish before changing the image
  setTimeout(() => {
    currentPortfolioIndex = (currentPortfolioIndex + 1) % portfolioImages.length; // Cycle through the images
    portfolioImageElement.src = portfolioImages[currentPortfolioIndex]; // Change image source
    portfolioImageElement.classList.remove('hidden'); // Remove 'hidden' class for fade-in effect
  }, 1000); // Timeout duration matches transition duration
}

// Change images every 5 seconds
setInterval(changeFashionShootImage, 3000);
setInterval(changeEditorialImage, 3000);
setInterval(changePortfolioImage, 3000);
