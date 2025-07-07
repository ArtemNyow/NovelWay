import { getCategories, getTopBooks } from "./api/bookApi"
import { refs } from "./refs";


export const markupBooks = books => {
    return books.map(
        ({ _id, book_image, title, author,price }) => `<li class="books__item">
            <article class="book-card">
              <div class="book-card__thumb">
                <img
                  class="book-card__image"
                  src="${book_image}"
                  alt="${title}"
                  width="343"
                  height="487"
                />
              </div>
              <div class="book-card__info">
                <div class="book-card__block">
                  <h3 class="book-card__title">${title}</h3>
                  <p class="book-card__author">${author}</p>
                </div>
                <p class="book-card__price">$${price}</p>
              </div>
              <button class="btn-gray btn-books" type="button" data-id="${_id}">
                Learn More
              </button>
            </article>
          </li>`
    ).join('');
}
export const renderBooksList = books => {
    refs.bookList.insertAdjacentHTML('beforeend',markupBooks(books))
}


export const markupCategoriesOption = categoris => {
    return categoris.map(
        ({ list_name }) =>
    `<option class="option-category" value="${list_name}">${list_name}</option>`
    ).join('');
}

export const renderCategoriesOption = async () => {
    const categoriesArr = await getCategories();
    const filtered = categoriesArr.filter(cat => cat.list_name.trim() !== "");

    filtered.unshift({ list_name: 'Categories' })
    refs.bookCategoryOption.insertAdjacentHTML('beforeend',markupCategoriesOption(filtered))
}

export const markupCategories = categoris => {
    return categoris.map(
        ({ list_name }) =>
            `<li class="books__option-item">
            <a id="childrens-middle-grade" href="#" class="books__option" data-category="${list_name}">${list_name}
            </a>
          </li>`
    ).join('');
}

export const renderCategories = async () => {
    const categoriesArr = await getCategories();
    const filtered = categoriesArr.filter(cat => cat.list_name.trim() !== "");

    filtered.unshift({ list_name: 'All categories' })
    refs.bookCategory.insertAdjacentHTML('beforeend',markupCategories(filtered))
}

export const markupModal = ({ book_image, title, author, price, description, publisher }) => {
    // Якщо description порожнє або null/undefined/порожній рядок, використовуємо publisher
    const descriptionText = description && description.trim() !== '' ? description : publisher;
  
    return `
    <div class="book-modal">
      <div class="book-modal-images">
        <button class="close-btn btn-icon-close" type="button">
          <svg class="icon-close" width="14" height="14">
            <use href="/img/sprite.svg#icon-close-btn"></use>
          </svg>
        </button>
        <img
          class="image-book-modal"
          src="${book_image}"
          alt="${title}"
          width="309"
          height="467"
        />
      </div>
      <div class="book-modal-info">
        <h2 class="book-modal-title">${title}</h2>
        <p class="book-modal-text">${author}</p>
        <p class="book-modal-price">$${price}</p>
        <form class="form-book-modal">
          <div class="form-book-quantity">
            <button class="btn-icon minus" type="button">
              <svg class="icon-price-minus" width="14" height="14">
                <use href="/img/sprite.svg#icon-minus"></use>
              </svg>
            </button>
            <input class="form-input-sum" name="number" type="text" />
            <button class="btn-icon plus" type="button">
              <svg class="icon-price-plus" width="14" height="14">
                <use href="/img/sprite.svg#icon-plus"></use>
              </svg>
            </button>
          </div>
          <div class="form-buttons">
            <button
              class="form-btn-book-modal add-to-cart btn-gap btn-orange"
              type="button"
            >
              Add To Cart
            </button>
            <button class="form-btn-book-modal buy-now btn-gray" type="submit">
              Buy Now
            </button>
          </div>
        </form>
        <ul class="accordeon-container">
          <li class="ac ac-item">
            <button class="ac-trigger">
              Details
              <svg class="icon-down icon-down-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-up"></use>
              </svg>
            </button>
            <div class="ac-panel">
              <p class="book-modal-item-text">
                ${descriptionText}
              </p>
            </div>
          </li>
          <li class="ac ac-item">
            <button class="ac-trigger">
              Shipping
              <svg class="icon-down icon-down-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-up"></use>
              </svg>
            </button>
            <div class="ac-panel">
              <p class="book-modal-item-text">
                We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.
              </p>
            </div>
          </li>
          <li class="ac ac-item">
            <button class="ac-trigger">
              Returns
              <svg class="icon-down icon-down-hidden" width="24" height="24">
                <use href="./img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="./img/sprite.svg#icon-chevron-up"></use>
              </svg>
            </button>
            <div class="ac-panel">
              <p class="book-modal-item-text">
                You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition. To
                start a return, please contact our support team — we’ll guide you
                through the process quickly and hassle-free.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    `;
  };
  
  

export function renderBookModal(book) {
    refs.backdrop.innerHTML = "";
    refs.backdrop.insertAdjacentHTML("beforeend",markupModal(book))
}