const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormSubmit(event) {
  event.preventDefault();

  console.log('Відправляємо форму');
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

function onFormInput(event) {
  const formItems = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formItems));
}

function loadFormData() {
  const loadKey = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (loadKey) {
     form.elements.email.value = loadKey.email;
    form.elements.message.value = loadKey.message;
}
}

loadFormData();
