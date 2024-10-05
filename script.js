// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');
const totalSlides = slides.length;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);
