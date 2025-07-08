import iziToast from "izitoast";
import { getBookById, getBooksByCategory } from "./api/bookApi";
import { initAllBooks, renderNextCategoryBooks, setCurrentCategoryBooks } from "./books";
import { refs } from "./refs";
import { updateBooksCounters } from "./helped";
import { openModalBook } from "./book-modal";
import { hideBooksLoader, showBooksLoader } from "./helped";


export async function handleCategoryClick(event) {
  event.preventDefault();
  const link = event.target.closest('.books__option');
  if (!link) return;
  const categoryName = link.dataset.category;
  await loadBooksForCategory(categoryName);
}

export async function handleCategorySelect(event) {
  event.preventDefault();
  const link = event.target.closest('.dropdown-menu-link');
  if (!link) return;
  const categoryName = link.dataset.category;

  refs.bookCategoryDropdown.closest('.dropdown').querySelector('.dropdown-label').textContent = categoryName;
  refs.bookCategoryDropdown.closest('.dropdown').classList.remove('open');

  await loadBooksForCategory(categoryName);
}

export async function loadBooksForCategory(categoryName) {
  refs.bookList.innerHTML = '';
  showBooksLoader();
  await Promise.resolve();
  try {
    if (categoryName === 'All categories') {
      const allBooks = await initAllBooks();

      if (allBooks.length > 24) {
        refs.showMore.classList.remove('is-hidden');
      } else {
        refs.showMore.classList.add('is-hidden');
      }
      return;
    }

    const books = await getBooksByCategory(categoryName);

    if (Array.isArray(books) && books.length > 0) {
      setCurrentCategoryBooks(books);  
      renderNextCategoryBooks();
    } else {
      updateBooksCounters(0, 0);
      refs.showMore.classList.add('is-hidden');
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: "topRight" });
  }
  finally {
    hideBooksLoader();
  }
}

export async function handleBookButtonClick(event) {
  const btn = event.target.closest(".btn-books");
  if (!btn) return;

  const bookId = btn.dataset.id;
  if (!bookId) return;

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
