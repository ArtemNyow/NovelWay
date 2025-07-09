import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';

document.addEventListener('DOMContentLoaded', () => {
  const { footerForm, footerInput } = refs;

  footerForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = footerInput.value.trim();

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

    footerForm.reset();
  });
});
