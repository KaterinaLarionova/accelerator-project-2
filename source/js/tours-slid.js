import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const slidesCount = document.querySelectorAll('.tours__swiper .swiper-slide').length;
  new Swiper('.tours__swiper', {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    loop: false,
    speed: 700,
    loopedSlides: slidesCount,
    slidesPerView: 1,
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
        slidesPerView: 2,
        spaceBetween: 18,
        simulateTouch: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false,
      }
    },
    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },
    mousewheel: {
      invert: true,
      forceToAxis: true,
      sensitivity: 2,
      releaseOnEdges: true,
    },
  });
});
