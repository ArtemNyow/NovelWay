import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function initContactModal() {
  function openModal(eventName, eventId) {
    const modal = document.getElementById('contactModal');
    const eventTitleSpan = document.getElementById('eventTitle');
    const eventIdInput = document.getElementById('eventId');

    eventTitleSpan.textContent = eventName;
    eventIdInput.value = eventId;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Запобігання прокрутки сторінки
  }

  function clearFormErrors() {
    document.querySelectorAll('.input-wrapper').forEach(wrapper => {
      wrapper.classList.remove('error');
      wrapper
        .querySelectorAll('.error-text-input, .error-text-textarea')
        .forEach(errorText => errorText.classList.remove('visible'));
    });
  }

  function showError(inputElement) {
    clearFormErrors();

    const wrapper = inputElement.closest('.input-wrapper');
    const errorText = wrapper.querySelector(
      '.error-text-input, .error-text-textarea'
    );

    if (errorText) {
      wrapper.classList.add('error');
      errorText.classList.add('visible');
    }
  }

  function validateInput(input) {
    if (input.required && !input.value.trim()) {
      showError(input);
      input.setCustomValidity('This field is required'); // Запобігання стандартній валідації
      return false;
    }

    if (input.type === 'email' && input.value) {
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailPattern.test(input.value)) {
        showError(input);
        input.setCustomValidity('Please enter a valid email address'); // Запобігання стандартній валідації
        return false;
      }
    }

    input.setCustomValidity(''); // Очищення користувацької валідації, якщо введення є дійсним
    return true;
  }

  function showToastError(errorMessages) {
    const message = errorMessages.join('<br/>');

    iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight',
      timeout: 5000,
    });
  }

  function showToastSuccess() {
    iziToast.success({
      title: 'Success',
      message: 'Registration successful!',
      position: 'topRight',
      timeout: 5000,
    });
  }

  function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Відновлення прокрутки сторінки
    document.getElementById('contactForm').reset();
    clearFormErrors();
  }

  // Слухачі подій
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeBtn');
  const contactForm = document.getElementById('contactForm');
  const inputs = document.querySelectorAll(
    '.input-wrapper input, .input-wrapper textarea'
  );

  // Запобігання стандартній валідації браузера шляхом додавання novalidate до форми
  contactForm.setAttribute('novalidate', true);

  // Закриття модального вікна при кліку поза його межами
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Закриття модального вікна при натисканні клавіші Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Кнопка закриття
  closeBtn.addEventListener('click', closeModal);

  // Відправка форми
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    clearFormErrors();

    let isValid = true;
    let errorMessages = []; // Збір повідомлень про помилки

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isValid = false;
        const wrapper = input.closest('.input-wrapper');
        const errorText = wrapper.querySelector(
          '.error-text-input, .error-text-textarea'
        );

        if (errorText && errorText.textContent) {
          errorMessages.push(errorText.textContent); // Збір повідомлень про помилки, якщо текст присутній
        }
      }
    });

    if (!isValid) {
      showToastError(errorMessages); // Відображення всіх повідомлень про помилки за допомогою iziToast
      return;
    }

    const formData = {
      eventId: document.getElementById('eventId').value,
      eventName: document.getElementById('eventTitle').textContent,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    console.log('Form submitted:', formData);
    showToastSuccess();
    closeModal();
  });

  // Валідація введення при втраті фокусу та зміні введення
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => {
      if (input.closest('.input-wrapper').classList.contains('error')) {
        validateInput(input);
      }
    });
  });

  window.openModal = openModal;
}

// Ініціалізація модального вікна
initContactModal();
