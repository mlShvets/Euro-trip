const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const catalogMenuItem = document.querySelectorAll('.places__nav-btn');
const catalogLink = document.querySelectorAll('.catalog__link');
const countryTab = document.querySelectorAll('.places__item');
const buyBtn = document.querySelectorAll('.buy-btn');
const closeBtn = document.querySelectorAll('.modal__close');
const buyPopup = document.querySelector('.modal--buy');
const successPopup = document.querySelector('.modal--success');
const forms = document.querySelectorAll('form');
const inputPhone = document.querySelectorAll('.input-phone');
const inputEmail = document.querySelectorAll('.input-email');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// burger

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

// popup

const openPopup = (popup) => {
  popup.classList.add('modal--show');
};

const closePopup = (popup) => {
  popup.classList.remove('modal--show');
};

buyBtn.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup(buyPopup);
    for (let i = 0; i < forms.length; i++) {
      if (!inputPhone[i].value) {
        inputPhone[i].focus();
      }
    }
  });
});

closeBtn.forEach((closebtn) => {
  closebtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup(buyPopup);
    closePopup(successPopup);
  });
});

// ESC close

window.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    if (buyPopup.classList.contains('modal--show')) {
      evt.preventDefault();
      closePopup(buyPopup);
    }
    if (successPopup.classList.contains('modal--show')) {
      evt.preventDefault();
      closePopup(successPopup);
    }
  }
});

//+7 in phone

inputPhone.forEach((tel) => {
  tel.addEventListener('focus', (evt) => {
    if (!tel.value) {
      evt.target.value = '+7';
    }
  });
});

// local Storage

let isStorageSupport = true;
let storageTel = '';
let storageEmail = '';

try {
  storageTel = localStorage.getItem('tel');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (storageTel || storageEmail) {
  inputPhone.forEach(tel => tel.value = storageTel);
  inputEmail.forEach(email => email.value = storageEmail);
}

// submit form

forms.forEach((form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    closePopup(buyPopup);
    openPopup(successPopup);
  });
});
