//burger-menu

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// slider

const catalogMenuItem = document.querySelectorAll('.places__nav-btn');
const catalogLink = document.querySelectorAll('.catalog__link');
const countryTab = document.querySelectorAll('.places__item');


const activeClassRemove = (collection, activeClass) => {
  collection.forEach((element) => {
    if (element.classList.contains(activeClass)) {
      element.classList.remove(activeClass);
    }
  });
};

const catalogMenuSwitch = (index) => {
  activeClassRemove(catalogMenuItem, "places__nav-btn--current");
  activeClassRemove(countryTab, "places__item--current");
  catalogMenuItem[index].classList.add("places__nav-btn--current");
  countryTab[index].classList.add("places__item--current");
};

catalogMenuItem.forEach((element, index) => {
  element.addEventListener('click', () => {
    catalogMenuSwitch(index);
  });
});

catalogLink.forEach((element, index) => {
  element.addEventListener('click', () => {
    catalogMenuSwitch(index);
  });
});
