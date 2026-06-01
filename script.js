const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.carrusel-btn.prev');
const btnNext = document.querySelector('.carrusel-btn.next');
let actual = 0;

function irA(index) {
    slides[actual].classList.remove('activo');
    actual = (index + slides.length) % slides.length;
    slides[actual].classList.add('activo');
}

btnNext.addEventListener('click', () => irA(actual + 1));
btnPrev.addEventListener('click', () => irA(actual - 1));

setInterval(() => irA(actual + 1), 4000);