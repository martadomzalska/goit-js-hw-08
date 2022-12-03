import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name]');
const message = form.querySelector('textarea');
const storageKey = 'feedback-form-state';

form.addEventListener('input', throttle(() => {
  const formValues = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formValues));
}, 500));

const json = localStorage.getItem(storageKey);
if (json !== null) {
  const reload = JSON.parse(json);
  email.value = reload.email;
  message.value = reload.message;
};

form.addEventListener('submit', throttle((event) => {
  const savedData = json;
  console.log(savedData);
  event.preventDefault();
  localStorage.removeItem(storageKey);
  form.reset();
}, 500));
  