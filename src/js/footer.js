import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.footer-form');
  const input = document.querySelector('.footer-input');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = input.value.trim();

    if (email === '') {
      iziToast.warning({
        title: 'Увага',
        message: 'Поле email не може бути порожнім!',
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#ffa000',
      });
      return;
    }

    form.reset();
  });
});
