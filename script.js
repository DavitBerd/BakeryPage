/*DATO*/
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
    },

});
document.querySelectorAll('.slidecard').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.slidecard').forEach(c => {
            c.classList.remove('active1');
            c.querySelector('.abs').classList.add('null');
        });
        card.classList.add('active1');
        card.querySelector('.abs').classList.remove('null');
    });
});
document.getElementById('menuBtn').addEventListener('click', () => {
    if (window.innerWidth <= 998) {
        document.getElementById('menu').classList.toggle('invis')
    }

})
window.addEventListener('resize', () => {
    if (window.innerWidth > 998) {
        menu.classList.add('invis');
    }
});
/*DATO*/
/*ANRI*/
const middleSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        992: {
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
        992: {
            slidesPerView: 3
        }
    },
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