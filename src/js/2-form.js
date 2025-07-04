const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Початковий обʼєкт з порожніми полями
let formData = {
  email: '',
  message: '',
};

// 📦 Відновлюємо, якщо є збережені дані
const savedState = localStorage.getItem(STORAGE_KEY);

if (savedState) {
  formData = JSON.parse(savedState);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// 🎯 Відстежуємо всі введення
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 🚀 Сабміт форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очищення: форма, сховище, обʼєкт
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});

