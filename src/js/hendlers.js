import iziToast from "izitoast";
import { getBookById, getBooksByCategory, getTopBooks } from "./api/bookApi";
import { initAllBooks, renderIndex } from "./books";
import { refs } from "./refs";
import { renderBooksList } from "./render-functions";
import { updateBooksCounters } from "./helped";
import { openModalBook } from "./book-modal";

export async function handleCategoryClick(event) {
    const link = event.target.closest('.books__option');
    if (!link) return;
    const categoryName = link.dataset.category;
    await loadBooksForCategory(categoryName);
}
export async function handleCategorySelect(event) {
    const categoryName = event.target.value;
    await loadBooksForCategory(categoryName);
  }
  
  async function loadBooksForCategory(categoryName) {
    refs.bookList.innerHTML = '';
  
    try {
      let books = [];
  
      if (categoryName === 'Categories' || categoryName === 'All categories') {
        const allBooks = await initAllBooks();
        const booksToRender = allBooks.slice(0, 24);
        renderBooksList(booksToRender);
  
        const renderedCount = booksToRender.length;
        const totalCount = allBooks.length;
  
        updateBooksCounters(renderedCount, totalCount);
  
        // Логіка кнопки
        if (renderedCount < totalCount) {
          refs.showMore.classList.remove('is-hidden');
        } else {
          refs.showMore.classList.add('is-hidden');
        }
  
        return; // щоб далі не йшло
      } else {
        books = await getBooksByCategory(categoryName);
      }
  
      if (Array.isArray(books) && books.length > 0) {
        const booksToRender = books.slice(0, 24);
        renderBooksList(booksToRender);
  
        const renderedCount = booksToRender.length;
        const totalCount = books.length;
  
        updateBooksCounters(renderedCount, totalCount);
  
        if (renderedCount < totalCount) {
          refs.showMore.classList.remove('is-hidden');
        } else {
          refs.showMore.classList.add('is-hidden');
        }
      } else {
        updateBooksCounters(0, 0);
        refs.showMore.classList.add('is-hidden');
      }
    } catch (error) {
      iziToast.error({ message: error.message, position: "topRight" });
    }
  }

  
  export async function handleBookButtonClick(event) {
    const btn = event.target.closest(".btn-books");
    if (!btn) return;
  
      const bookId = btn.dataset.id;
    if (!bookId) {
      console.error("Не знайдено data-id у кнопки");
      return;
    }
  
    try {
        const bookData = await getBookById(bookId);
      openModalBook(bookData);
    } catch (error) {
      iziToast.error({
        message: "Не вдалося завантажити дані книги",
        position: "topRight",
      });
    }
  }
  

  

  
  