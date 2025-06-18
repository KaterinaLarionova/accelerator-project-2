const navMain = document.querySelector('.site-list');
const navToggle = document.querySelector('.main-header__toggle--closed');
const menuLinks = document.querySelectorAll('.site-list__link');
const menuOverlay = document.querySelector('.menu-overlay');


function burger() {
  if (navToggle.classList.contains('main-header__toggle--open')) {
    navMain.classList.add('site-list--closed');
    navMain.classList.remove('site-list__open');
    navToggle.classList.remove('main-header__toggle--open');
    navToggle.classList.add('main-header__toggle--closed');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  } else {
    navMain.classList.add('site-list__open');
    navMain.classList.remove('site-list--closed');
    navToggle.classList.add('main-header__toggle--open');
    navToggle.classList.remove('main-header__toggle--closed');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMain.classList.add('site-list--closed');
    navMain.classList.remove('site-list__open');
    navToggle.classList.remove('main-header__toggle--open');
    navToggle.classList.add('main-header__toggle--closed');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

navToggle.addEventListener('click', burger);
