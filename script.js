/*DATO*/
/*DATO*/
/*ANRI*/
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
    },
});
const swiperContainer = document.querySelector('.swiper-container');
swiperContainer.addEventListener('click', (e) => {
    const clickedStep = e.target.closest('.step');
    if (!clickedStep) return;
    swiperContainer.querySelectorAll('.step.active').forEach((el) => {
        el.classList.remove('active');
    });
    clickedStep.classList.add('active');
});

/*ANRI*/
/*DACHI*/
/*DACHI*/ 