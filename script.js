// Smooth scroll for "Order Now" button
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

// Example: Filter food items by category (if categories are added)
const foodItems = document.querySelectorAll('.food-item');

function filterFood(category) {
    foodItems.forEach(item => {
        if (category === 'all' || item.querySelector('h3').textContent.toLowerCase() === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Example usage: Call filterFood('pizza') to show only pizza items

// Slider functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

// Smooth scroll for "Order Now" button
document.querySelector('.free-delivery-section .btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#order-now').scrollIntoView({ behavior: 'smooth' });
});

// Highlight the top-ranked food
const rankingItems = document.querySelectorAll('.ranking-item');
rankingItems.forEach((item, index) => {
    if (index === 0) {
        item.style.border = '3px solid gold';
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Fade-in effect for About Us section
const aboutSection = document.querySelector('.about-us-section');

window.addEventListener('scroll', () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
    }
});

aboutSection.style.opacity = '0';
aboutSection.style.transform = 'translateY(50px)';
aboutSection.style.transition = 'all 0.5s ease-in-out';