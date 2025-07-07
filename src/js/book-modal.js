import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.btn-icon-close');
const minus = document.querySelector('.minus');
const inputSum = document.querySelector('.form-input-sum');
const plus = document.querySelector('.plus');
const formBookModal = document.querySelector('.form-book-modal');
const addToCartBtn = document.querySelector('.add-to-cart');
// const btnBooks = document.querySelector('[data-id]');

new Accordion('.accordeon-container');

inputSum.value = 1;
let value = 1;
let number;

// btnBooks.addEventListener('click', onModal);

// function onModal(event) {
//   backdrop.classList.add('is-open-book-modal');
//   document.body.classList.add('no-scroll');
//   inputSum.value = 1;
// }

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
  inputSum.value = 1;
}

minus.addEventListener('click', minusBtn);

function minusBtn(event) {
  if (inputSum.value > 1) {
    inputSum.value = +inputSum.value - 1;
  }
}

plus.addEventListener('click', plusBtn);

function plusBtn(event) {
  inputSum.value = +inputSum.value + 1;
}

addToCartBtn.addEventListener('click', addToCart);

function addToCart(event) {
  value = inputSum.value.trim();
  number = Number(value);
  if (!value || isNaN(number) || number < 1) {
    iziToast.error({
      message: 'Ведіть корректний формат',
      position: 'topRight',
    });
    inputSum.value = 1;
    return;
  } else {
    iziToast.success({
      message: `Кількість обраних товарів: ${number}`,
      position: 'topRight',
    });
  }
}

formBookModal.addEventListener('submit', buyNow);

function buyNow(event) {
  event.preventDefault();

  value = inputSum.value.trim();
  number = Number(value);
  if (!value || isNaN(number) || number < 1) {
    iziToast.error({
      message: 'Ведіть корректний формат',
      position: 'topRight',
    });
    inputSum.value = 1;
    return;
  } else {
    iziToast.success({
      message: 'Дякуємо за покупку',
      position: 'topRight',
    });
  }
}
