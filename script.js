// ---- CARRUSEL (inicio.html) ----
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
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
}

// ---- LIGHTBOX (proyectos.html) ----
const galeriaImgs = document.querySelectorAll('#galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCerrar = document.getElementById('lightbox-cerrar');

if (galeriaImgs.length > 0) {
    galeriaImgs.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('activo');
        });
    });

    lightboxCerrar.addEventListener('click', () => {
        lightbox.classList.remove('activo');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('activo');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') lightbox.classList.remove('activo');
    });
}
