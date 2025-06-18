import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

window.addEventListener('DOMContentLoaded', () => {
  const slidesCount = document.querySelectorAll('.reviews__swiper .swiper-slide').length;
  new Swiper('.reviews__swiper', {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    loop: false,
    speed: 700,
    loopedSlides: slidesCount,
    slidesPerView: 'auto',
    initialSlide: 0,
    watchOverflow: true,
    centeredSlides: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        simulateTouch: true,
      },
      768: {
        width: 1160,
        slidesPerView: 2,
        spaceBetween: 30,
        simulateTouch: true,
      },
      1440: {
        width: 1520,
        slidesPerView: 2,
        spaceBetween: 120,
        simulateTouch: false,
      }
    },
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    mousewheel: {
      invert: true,
      forceToAxis: true,
      sensitivity: 2,
      releaseOnEdges: true,
    },
  });
});
