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
        title: 'Attention',
        message: 'The email field cannot be empty!',
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#ffa000',
      });
      return;
    }
    
    iziToast.success({
      title: 'Success',
      message: 'Thank you for subscribing!',
      position: 'topRight',
      timeout: 3000,
      backgroundColor: '#4caf50',
    });
    

    footerForm.reset();
  });
});
