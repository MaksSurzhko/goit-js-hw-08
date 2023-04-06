import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailValue = form.querySelector('input');
const messageValue = form.querySelector('textarea');

const { email = '', message = '' } = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

emailValue.value = email;
messageValue.value = message;

const saveState = throttle(() => {
  const state = { email: emailValue.value, message: messageValue.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

form.addEventListener('input', saveState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailValue.value = '';
  messageValue.value = '';
});