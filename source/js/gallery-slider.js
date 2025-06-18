import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

let swiperInstance = null;

function initSwiper() {
  const slidesCount = document.querySelectorAll('.gallery__swiper .swiper-slide').length;
  swiperInstance = new Swiper('.gallery__swiper', {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    loop: true,
    speed: 700,
    loopedSlides: slidesCount,
    watchOverflow: true,
    centeredSlides: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
        initialSlide: 0,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        simulateTouch: true,
      },
    },
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    mousewheel: {
      invert: true,
      forceToAxis: true,
      sensitivity: 2,
      releaseOnEdges: true,
    },
  });
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

function checkSwiper() {
  if (window.innerWidth <= 1439) {
    if (!swiperInstance) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

window.addEventListener('DOMContentLoaded', checkSwiper);
window.addEventListener('resize', checkSwiper);
