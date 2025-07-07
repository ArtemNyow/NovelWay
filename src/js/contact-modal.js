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
      return false;
    }

    if (input.type === 'email' && input.value) {
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailPattern.test(input.value)) {
        showError(input);
        return false;
      }
    }

    return true;
  }

  function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Повернення прокрутки сторінки
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

  // Закриття модального вікна при кліку на тло
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
    let isValid = true;

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    if (!isValid) return;

    const formData = {
      eventId: document.getElementById('eventId').value,
      eventName: document.getElementById('eventTitle').textContent,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    console.log('Form submitted:', formData);
    closeModal();
  });

  // Валідація вводу
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => {
      if (input.closest('.input-wrapper').classList.contains('error')) {
        validateInput(input);
      }
    });
  });

  // Відкриття доступу функції openModal у глобальну область видимості
  window.openModal = openModal;
}

// Ініціалізація модального вікна
initContactModal();
