import Swiper from 'swiper';
import {Manipulation, Navigation} from 'swiper/modules';
import 'swiper/css';

let swiperInstance = null;
let originalSwiperDivs = null;

function initSwiper() {
  const swiperWrapperDiv = document.querySelector('.advantages__swiper .swiper-wrapper');
  const slideDivs = document.querySelectorAll('.advantages__swiper .swiper-slide');
  originalSwiperDivs = slideDivs;
  slideDivs.forEach((slideDiv) => {
    const duplicateSlide = slideDiv.cloneNode(true);
    swiperWrapperDiv.appendChild(duplicateSlide);
  });
  swiperInstance = new Swiper('.advantages__swiper', {
    modules: [Navigation, Manipulation],
    direction: 'horizontal',
    slidesPerGroup: 2,
    initialSlide: 2,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 700,
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
  });
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    const swiperWrapperDiv = document.querySelector('.advantages__swiper .swiper-wrapper');
    swiperWrapperDiv.replaceChildren(...originalSwiperDivs);
    originalSwiperDivs = null;
  }
}

function checkSwiper() {
  if (window.innerWidth >= 1440) {
    if (!swiperInstance) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

window.addEventListener('DOMContentLoaded', checkSwiper);
window.addEventListener('resize', checkSwiper);


