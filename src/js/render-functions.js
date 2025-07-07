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

