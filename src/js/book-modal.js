import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import iziToast from "izitoast";
import { renderBookModal } from "./render-functions";
import { refs } from "./refs";



function onEscPress(e) {
  if (e.key === "Escape") closeModal();
}

export function openModalBook(bookData) {
  renderBookModal(bookData);

  backdrop.classList.add("is-open-book-modal");
  document.body.classList.add("no-scroll");

  new Accordion(".accordeon-container", {
    showMultiple: true, 
  });

  const inputSum =refs.backdrop.querySelector(".form-input-sum");
  const minus = refs.backdrop.querySelector(".minus");
  const plus = refs.backdrop.querySelector(".plus");
  const addToCartBtn = refs.backdrop.querySelector(".add-to-cart");
  const formBookModal = refs.backdrop.querySelector(".form-book-modal");
  const closeBtn = refs.backdrop.querySelector(".close-btn");
  

  inputSum.value = 1;

  minus.addEventListener("click", () => {
    if (inputSum.value > 1) inputSum.value = +inputSum.value - 1;
  
    
  });

  plus.addEventListener("click", () => {
    inputSum.value = +inputSum.value + 1;
  });

  addToCartBtn.addEventListener("click", () => {
    const val = inputSum.value.trim();
    const num = Number(val);
    if (!val || isNaN(num) || num < 1) {
      iziToast.error({
        message: "Ведіть корректний формат",
        position: "topRight",
      });
      inputSum.value = 1;
    } else {
      iziToast.success({
        message: `Кількість обраних товарів: ${num}`,
        position: "topRight",
      });
    }
  });

  formBookModal.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = inputSum.value.trim();
    const num = Number(val);
    if (!val || isNaN(num) || num < 1) {
      iziToast.error({
        message: "Ведіть корректний формат",
        position: "topRight",
      });
      inputSum.value = 1;
    } else {
      iziToast.success({
        message: "Дякуємо за покупку",
        position: "topRight",
      });
    }
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", onEscPress);
}

function closeModal() {
  backdrop.classList.remove("is-open-book-modal");
  document.body.classList.remove("no-scroll");
  backdrop.innerHTML = "";

  document.removeEventListener("keydown", onEscPress);
}
