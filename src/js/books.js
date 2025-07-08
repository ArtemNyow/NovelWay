import { getCategories, getBooksByCategory } from "./api/bookApi";
import { hideBooksLoader, showBooksLoader, updateBooksCounters } from "./helped";
import { handleBookButtonClick, handleCategoryClick, handleCategorySelect } from "./hendlers";
import { refs } from "./refs";
import { renderBooksList, renderCategories, renderCategoriesOption,   } from "./render-functions";


export let allCurrentBooks = [];
let currentCategoryBooks = [];
let currentRenderIndex = 0;

export function setCurrentCategoryBooks(books) {
  currentCategoryBooks = books;
  currentRenderIndex = 0;
}

export function getCurrentCategoryBooks() {
  return currentCategoryBooks;
}

export function getCurrentRenderIndex() {
  return currentRenderIndex;
}

export function incrementCurrentRenderIndex(by) {
  currentRenderIndex += by;
}

export async function initAllBooks() {
  showBooksLoader();

  try {
    const categories = await getCategories();
    const filteredCategories = categories.filter(cat => cat.list_name.trim() !== "");

    const allBooksArrays = await Promise.all(
      filteredCategories.map(cat => getBooksByCategory(cat.list_name))
    );
    allCurrentBooks = allBooksArrays.flat();

    setCurrentCategoryBooks(allCurrentBooks);
    renderNextCategoryBooks();

    return allCurrentBooks;
  } catch (error) {
    console.error("Помилка під час завантаження всіх книг:", error);
  }
  finally {
    hideBooksLoader();
  }
}

export function renderNextCategoryBooks() {
  showBooksLoader();
  const booksToRender = currentCategoryBooks.slice(currentRenderIndex, currentRenderIndex + 24);
  incrementCurrentRenderIndex(booksToRender.length);

  if (currentRenderIndex === booksToRender.length) {
    refs.bookList.innerHTML = '';
  }

  renderBooksList(booksToRender);
  updateBooksCounters(currentRenderIndex, currentCategoryBooks.length);

  if (currentRenderIndex < currentCategoryBooks.length) {
    refs.showMore.classList.remove('is-hidden');
  } else {
    refs.showMore.classList.add('is-hidden');
  }
  hideBooksLoader();
}

initAllBooks();
renderCategoriesOption();
renderCategories();

refs.bookCategory.addEventListener('click', handleCategoryClick);
refs.bookCategoryDropdown.addEventListener('click', handleCategorySelect);
refs.showMore.addEventListener("click", renderNextCategoryBooks);
document.body.addEventListener("click", handleBookButtonClick);
