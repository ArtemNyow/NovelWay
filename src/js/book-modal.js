import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.btn-icon-close');

closeBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function closeModal(event) {
  backdrop.classList.remove('is-open-book-modal');
  document.body.classList.remove('no-scroll');
}
