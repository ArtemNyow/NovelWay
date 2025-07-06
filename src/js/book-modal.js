import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.btn-icon-close');
const minus = document.querySelector('.minus');
const inputSum = document.querySelector('.form-input-sum');
const plus = document.querySelector('.plus');

inputSum.value = 1;

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

minus.addEventListener('click', minusBtn);

function minusBtn(event) {
  if (inputSum.value > 1) {
    inputSum.value = Number(inputSum.value) - 1;
  }
}

plus.addEventListener('click', plusBtn);

function plusBtn(event) {
  inputSum.value = Number(inputSum.value) + 1;
}
