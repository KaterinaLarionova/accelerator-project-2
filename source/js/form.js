const VALID_EMAIL = /^[\wа-яА-ЯёЁ._%+-]+@([\wа-яА-ЯёЁ-]+\.)+[a-zA-Zа-яА-ЯёЁ]{2,}$/u;
const VALID_PHONE = /^(7|8|\+7)?[\s(]*[0-9]{3}[\s)]*[-]?[\s]*[0-9]{3}[-]?[\s]*[0-9]{2}[-]?[\s]*[0-9]{2}$/;

const emailInput = document.querySelector('.form__input--email');
const phoneInput = document.querySelector('.form__input--phone');
const form = document.querySelector('.form');

function validatePhone(value) {
  if (value === '') {
    return 'Пожалуйста, заполните это поле.';
  } else if (!VALID_PHONE.test(value)) {
    return 'Некорректный формат телефона.';
  }
  return '';
}

function validateEmail(value) {
  if (value === '') {
    return 'Пожалуйста, заполните это поле.';
  } else if (!VALID_EMAIL.test(value)) {
    return 'Некорректный формат email.';
  }
  return '';
}

phoneInput.addEventListener('input', () => {
  phoneInput.setCustomValidity('');
  phoneInput.classList.remove('form__input--error');
});

emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity('');
  emailInput.classList.remove('form__input--error');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const phoneValue = phoneInput.value.trim();
  const phoneError = validatePhone(phoneValue);

  if (phoneError) {
    phoneInput.setCustomValidity(phoneError);
    phoneInput.classList.add('form__input--error');
    phoneInput.reportValidity();
    return;
  }

  const emailValue = emailInput.value.trim();
  const emailError = validateEmail(emailValue);

  if (emailError) {
    emailInput.setCustomValidity(emailError);
    emailInput.classList.add('form__input--error');
    emailInput.reportValidity();
    return;
  }

  form.noValidate = true;
  form.submit();
  form.reset();
});


/*emailInput.addEventListener('blur', () => {
  const email = emailInput.value.trim();
  if (!email || !isValidEmail(email)) {
    emailInput.style.borderColor = '#ff121f';
  } else {
    emailInput.style.borderColor = 'rgba(2, 102, 193, 0.1)';
    emailInput.textContent = '';
  }
});

phoneInput.addEventListener('blur', () => {
  const phone = phoneInput.value.trim();
  if (!phone || !isValidPhone(phone)) {
    phoneInput.style.borderColor = '#ff121f';
  } else {
    phoneInput.style.borderColor = 'rgba(2, 102, 193, 0.1)';
    emailInput.textContent = '';
  }

});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  [emailInput, phoneInput].forEach((input) => {
    input.classList.remove('form__input--error');
  });
  //});

  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  let isValid = true;


  if (!email || !isValidEmail(email)) {
    emailInput.style.borderColor = '#ff121f';
    isValid = false;
  }

  if (!phone || !isValidPhone(phone)) {
    phoneInput.style.borderColor = '#ff121f';
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});

function isValidPhone(phone) {
  return VALID_PHONE.test(phone);
}

function isValidEmail(email) {
  return VALID_EMAIL.test(email);
}
*/
