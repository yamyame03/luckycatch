const sliderWrap = document.querySelector(".slider__wrap");
const slderImg = sliderWrap.querySelector(".slider__img"); 
const slider = sliderWrap.querySelectorAll(".slider");

let currentIndex = 0;               // 현재 보이는 이미지
let sliderCount = slider.length;    // 이미지 갯수
let sliderInterval = 3000;          // 이미지 변경 간격 시간

setInterval(() => {
    let nextIndex = (currentIndex + 1) % sliderCount;

    $(slider[currentIndex]).animate({ opacity: 0 }, 500); // 현재 슬라이더 숨기기
    $(slider[nextIndex]).animate({ opacity: 1 }, 500); // 다음 슬라이더 보여주기

    currentIndex = nextIndex;
}, sliderInterval);