const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },

});
document.querySelectorAll('.slidecard').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.slidecard').forEach(c => {
            c.classList.remove('active');
            c.querySelector('.abs').classList.add('null');
        });
        card.classList.add('active');
        card.querySelector('.abs').classList.remove('null');
    });
});