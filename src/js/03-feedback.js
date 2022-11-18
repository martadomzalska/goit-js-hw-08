import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name]');
const message = form.querySelector('textarea');
const storageKey = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(event => {
    const {
      elements: { email, message },
    } = event.currentTarget;
    console.log(email.value, message.value);
    const formValues = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(formValues));
  }, 500)
);

const json = localStorage.getItem(storageKey);
if (json !== null) {
  const reload = JSON.parse(json);

  email.value = reload.email;

  message.value = reload.message;
}

form.addEventListener(
  'submit',
  throttle(event => {
    localStorage.removeItem(storageKey);
  }, 500)
);
