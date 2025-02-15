/*DATO*/
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
/*DATO*/
/*ANRI*/
const middleSwiper = new Swiper('.swiper-container', {
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
const swiper2 = new Swiper('.myswiper', {
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

document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.setAttribute('tabindex', '0');
});

document.querySelector('.myswiper').addEventListener('click', function (e) {
    const card = e.target.closest('.SC');
    if (card) {
        document.querySelectorAll('.SC').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    }
});
/*DACHI*/ 