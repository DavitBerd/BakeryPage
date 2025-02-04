const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        769: {
            slidesPerView: 3
        }
    },
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.setAttribute('tabindex', '0');
    });

    document.querySelector('.swiper').addEventListener('click', function (e) {
        const card = e.target.closest('.SC');
        if (card) {
            document.querySelectorAll('.SC').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        }
    });
});