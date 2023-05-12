import { throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInputData, 500));
formEl.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = formEl.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
}