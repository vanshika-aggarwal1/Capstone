const sky = document.querySelector('html');

// Generate random stars
function createStars() {
  for (let i = 0; i < 400; i++) { // Adjust the number of stars as needed
    const star = document.createElement('div');
    star.classList.add('star');

    // Random positions and sizes
    star.style.left = `${Math.random() * 98}vw`;
    star.style.top = `${Math.random() * 450}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random twinkle duration
    star.style.animationDelay = `${Math.random() * 2}s`; // Random delay

    sky.appendChild(star);
  }
}

// Call the function
createStars();

// Select the hamburger menu and the nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar-links');

// Toggle the visibility of the navigation links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

