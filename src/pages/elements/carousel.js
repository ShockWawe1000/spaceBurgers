 function carouselLogic (leftBtn,rightBtn){


const prev = leftBtn;
const next = rightBtn;
const wrap = document.querySelector('.img-wrap');
const imgs = document.querySelectorAll('.img-wrap .card');

let idx = 0;

function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(-${idx * 100}%)`;
}

next.addEventListener('click', () => {
    idx++;
    showImg();
});

prev.addEventListener('click', () => {
    idx--;
    showImg();
});

setInterval(() => {
    idx++;
    showImg();
}, 3000);

showImg();
}

export {carouselLogic}