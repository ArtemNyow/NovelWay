export function initContactModal() {
  function openModal(eventName, eventId) {
    const modal = document.getElementById('contactModal');
    const eventTitleSpan = document.getElementById('eventTitle');
    const eventIdInput = document.getElementById('eventId');

    eventTitleSpan.textContent = eventName;
    eventIdInput.value = eventId;

    modal.style.display = 'block';
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

  function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    document.getElementById('contactForm').reset();
    clearFormErrors();
  }

  function validateInput(input) {
    const wrapper = input.closest('.input-wrapper');
    const errorText = wrapper.querySelector(
      '.error-text-input, .error-text-textarea'
    );

    if (!errorText) return true;

    if (input.required && !input.value.trim()) {
      wrapper.classList.add('error');
      errorText.classList.add('visible');
      return false;
    }

    if (input.type === 'email' && input.value) {
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailPattern.test(input.value)) {
        wrapper.classList.add('error');
        errorText.classList.add('visible');
        return false;
      }
    }

    wrapper.classList.remove('error');
    errorText.classList.remove('visible');
    return true;
  }

  // Modal background close
  document.getElementById('contactModal').addEventListener('click', e => {
    if (e.target === document.getElementById('contactModal')) {
      closeModal();
    }
  });

  // Escape key close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Close button
  document.getElementById('closeBtn').addEventListener('click', closeModal);

  // Submit handler
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();

    const inputs = document.querySelectorAll(
      '.input-wrapper input, .input-wrapper textarea'
    );
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

  // Input + Blur validation
  document
    .querySelectorAll('.input-wrapper input, .input-wrapper textarea')
    .forEach(input => {
      input.addEventListener('blur', () => validateInput(input));
      input.addEventListener('input', () => {
        if (input.closest('.input-wrapper').classList.contains('error')) {
          validateInput(input);
        }
      });
    });

  // Expose openModal
  window.openModal = openModal;
}
