import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name]');
const message = form.querySelector('textarea');
const storageKey = 'feedback-form-state';
const button = form.querySelector('button');
if (message.value === '' || email.value === '') {
  button.setAttribute('disabled', 'true');
}

form.addEventListener('input', throttle(() => {
  const formValues = {
    email: email.value,
    message: message.value,
  };
  if (message.value === "" || email.value === "") {
     button.setAttribute("disabled", "true");
  } else {
     button.removeAttribute('disabled');
     
  }
  localStorage.setItem(storageKey, JSON.stringify(formValues));
}, 500));

const json = localStorage.getItem(storageKey);
if (json !== null) {
  const reload = JSON.parse(json);
  email.value = reload.email;
  message.value = reload.message;
  if (message.value !== '' && email.value !== '') {
     button.removeAttribute('disabled');
  }
};


form.addEventListener('submit', (event) => {
  console.log(localStorage.getItem(storageKey));
  event.preventDefault();
  form.reset();
  localStorage.removeItem(storageKey);
  button.setAttribute("disabled", "true");
});
