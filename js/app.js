var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
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
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});

const form = document.querySelector('form'),
    hidedBlock = document.querySelector('.hidedBlock'),
    requestACall = document.querySelector('.btn-primary'),
    hidedBlockModal = document.querySelector('.hidedBlockModal');
form.addEventListener('submit', tyuForAttention);
requestACall.addEventListener('click', tyuForAttention);

function tyuForAttention() {
    document.querySelector('.modal-title').style.display = 'none';
    document.querySelector('.modal-header').style.border = 'none';
    document.querySelector('.modal-form').style.display = 'none';
    document.querySelector('.btn-primary').style.display = 'none';
    document.querySelector('.btn-secondary').style.display = 'none';
    document.querySelector('.modal-footer').style.border = 'none';
    hidedBlockModal.style.display = 'flex';
    form.classList.add('hide');
    hidedBlock.style.display = 'flex';
}

let text = 'текст';
console.log(text);