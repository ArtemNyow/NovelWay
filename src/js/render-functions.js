import { getTopBooks } from "./api/bookApi"
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
                <p class="book-card__price">$${price ?? '0.00'}</p>
              </div>
              <button class="btn-gray btn-books" type="button" data-id="${_id}">
                Learn More
              </button>
            </article>
          </li>`
    ).join('');
}
export const renderBooksList = async () => {
    const bookArr = await getTopBooks();
    console.log('bookArr:', bookArr);
    refs.bookList.insertAdjacentHTML('beforeend',markupBooks(bookArr))
}