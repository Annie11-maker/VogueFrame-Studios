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

//animations

function addAnimationClass(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;

      image.classList.add('slide-in');

      // Reset animation
      image.addEventListener('animationend', () => {
        image.classList.remove('slide-in');
      });
    }
  });
}

//trigger each time the element comes into view
const observer = new IntersectionObserver(addAnimationClass, {
  threshold: 0.5 , // Trigger when 50% of the element is visible
});
const images = document.querySelectorAll('.services-img');
images.forEach(image => observer.observe(image));

//image changing
const fashionShootImages = [
  'images/fashion1.png',
  'images/fashion2.jpg',
  'images/fashion3.jpg'
];

const editorialImages = [
  'images/editorial1.jpg',
  'images/editorial2.jpg',
  'images/editorial3.jpg'
];

const portfolioImages = [
  'images/portfolio1.png',
  'images/portfolio2.png',
  'images/portfolio3.png'
];

let currentFashionShootIndex = 0;
const fashionShootImageElement = document.getElementById('fashion-shoot-image');

function changeFashionShootImage() {
  fashionShootImageElement.classList.add('hidden');

  setTimeout(() => {
    currentFashionShootIndex = (currentFashionShootIndex + 1) % fashionShootImages.length;
    fashionShootImageElement.src = fashionShootImages[currentFashionShootIndex];
    fashionShootImageElement.classList.remove('hidden');
  }, 1000);
}


let currentEditorialIndex = 0;
const editorialImageElement = document.getElementById('editorial-image');

function changeEditorialImage() {
  editorialImageElement.classList.add('hidden');

  setTimeout(() => {
    currentEditorialIndex = (currentEditorialIndex + 1) % editorialImages.length;
    editorialImageElement.src = editorialImages[currentEditorialIndex];
    editorialImageElement.classList.remove('hidden');
  }, 1000);
}

let currentPortfolioIndex = 0;
const portfolioImageElement = document.getElementById('portfolio-image');

function changePortfolioImage() {
  portfolioImageElement.classList.add('hidden');

  // wait
  setTimeout(() => {
    currentPortfolioIndex = (currentPortfolioIndex + 1) % portfolioImages.length;
    portfolioImageElement.src = portfolioImages[currentPortfolioIndex];
    portfolioImageElement.classList.remove('hidden'); // fade-in effect
  }, 1000);
}

// 3 sec interval
setInterval(changeFashionShootImage, 3000);
setInterval(changeEditorialImage, 3000);
setInterval(changePortfolioImage, 3000);
