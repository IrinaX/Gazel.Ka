var swiperStock = new Swiper('.swiper-stock', {

    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.stock-content__button-next',

    },
});

var swiper = new Swiper('.our-transport__swiper', {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});

const form = document.querySelector('form'),
    hidedBlock = document.querySelector('.hided-block'),
    hidedBlockModal = document.querySelector('.hided-block-modal');

function tyuForAttention() {
    hidedBlockModal.style.display = 'flex';
    form.classList.add('hide');
    document.querySelector('.modal-header').classList.add('hide');
    document.querySelector('.modal-footer').classList.add('hide');
    document.querySelector('.modal-form').classList.add('hide');
    hidedBlock.style.display = 'flex';
}