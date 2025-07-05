document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.footer-form');
  const emailInput = form.querySelector('input[type="email"]');
  const errorText = document.querySelector('.footer-input-text');

  form.setAttribute('novalidate', '');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = emailInput.value.trim();

    if (value === '' || !emailInput.checkValidity()) {
      errorText.hidden = false;             
      emailInput.classList.add('input-error');
    } else {
      errorText.hidden = true;              
      emailInput.classList.remove('input-error');
      form.submit();                        
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '' && emailInput.checkValidity()) {
      errorText.hidden = true;
      emailInput.classList.remove('input-error');
    }
  });
});
