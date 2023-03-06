// Carousel Script
let slidePosition = 1;
slideShow(slidePosition);

function plusSlides(n) {
    slideShow(slidePosition += n);
}

function currentSlide(n) {
    slideShow(slidePosition = n);
}

function slideShow(n) {
    let slides = document.getElementsByClassName('project-card');

    if (n > slides.length) {
        slidePosition = 1;
    }
    if (n < 1) {
        slidePosition = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slidePosition - 1].style.display = 'block';
}