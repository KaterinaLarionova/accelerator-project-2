import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const initSwiper = () => {
    const screenWidth = window.innerWidth;
    const slidesCount = document.querySelectorAll('.training__swiper .swiper-slide').length;
    let initialSlide = 0;

    if (screenWidth >= 1440) {
      initialSlide = 0;
    } else if (screenWidth >= 768) {
      initialSlide = 0;
    } else {
      initialSlide = 2;
    }

    if (window.trainingSwiper) {
      window.trainingSwiper.destroy(true, true);
    }

    window.trainingSwiper = new Swiper('.training__swiper', {
      modules: [Navigation, Mousewheel],
      direction: 'horizontal',
      loop: false,
      rtl: true,
      speed: 700,
      slidesPerView: 1,
      loopedSlides: slidesCount,
      initialSlide: initialSlide,
      watchOverflow: true,
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          simulateTouch: true,
          initialSlide: 0,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
          simulateTouch: false,
          initialSlide: 0,
        },
      },
      navigation: {
        nextEl: '.training__button--next',
        prevEl: '.training__button--prev',
      },
      mousewheel: {
        invert: true,
        forceToAxis: true,
        sensitivity: 2,
        releaseOnEdges: true,
      },
    });
  };

  initSwiper();
  window.addEventListener('resize', initSwiper);
});
