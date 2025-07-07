import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function initContactModal() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.events-list-item-btn').forEach(button => {
      button.addEventListener('click', () => {
        const container = button.closest('.events-list-item');
        const title = container
          .querySelector('.events-list-item-title')
          .textContent.trim();
        const id = button.getAttribute('data-id');
        openModal(title, id);
      });
    });
  });

  function openModal(eventName, eventId) {
    const modal = document.getElementById('contactModal');
    const eventTitleSpan = document.getElementById('eventTitle');
    const eventIdInput = document.getElementById('eventId');

    eventTitleSpan.textContent = eventName;
    eventIdInput.value = eventId;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
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
      input.setCustomValidity('This field is required');
      return false;
    }

    if (input.type === 'email' && input.value) {
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailPattern.test(input.value)) {
        showError(input);
        input.setCustomValidity('Please enter a valid email address');
        return false;
      }
    }

    input.setCustomValidity('');
    const wrapper = input.closest('.input-wrapper');
    wrapper.classList.remove('error');
    wrapper
      .querySelectorAll('.error-text-input, .error-text-textarea')
      .forEach(errorText => errorText.classList.remove('visible'));
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
    document.body.style.overflow = 'auto';
    document.getElementById('contactForm').reset();
    clearFormErrors();
  }

  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeBtn');
  const contactForm = document.getElementById('contactForm');
  const inputs = document.querySelectorAll(
    '.input-wrapper input, .input-wrapper textarea'
  );

  contactForm.setAttribute('novalidate', true);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  closeBtn.addEventListener('click', closeModal);

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    clearFormErrors();

    let isValid = true;
    let errorMessages = [];

    let firstInvalidInput = null;
    for (const input of inputs) {
      if (!validateInput(input)) {
        if (!firstInvalidInput) {
          firstInvalidInput = input;
        }
        isValid = false;
        const wrapper = input.closest('.input-wrapper');
        const errorText = wrapper.querySelector(
          '.error-text-input, .error-text-textarea'
        );

        if (errorText && errorText.textContent) {
          errorMessages.push(errorText.textContent);
        }
        break;
      }
    }

    if (!isValid) {
      showToastError(errorMessages);
      if (firstInvalidInput) {
        showError(firstInvalidInput);
      }
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

initContactModal();
