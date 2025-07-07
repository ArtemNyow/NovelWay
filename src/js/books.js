import { getCategories, getBooksByCategory } from "./api/bookApi";
import { updateBooksCounters } from "./helped";
import {handleBookButtonClick, handleCategoryClick, handleCategorySelect } from "./hendlers";
import { refs } from "./refs";
import { renderBooksList, renderCategories, renderCategoriesOption } from "./render-functions";

export let allCurrentBooks = [];  
export let renderIndex = 0;       


export async function initAllBooks() {
    try {
      const categories = await getCategories();
      const filteredCategories = categories.filter(cat => cat.list_name.trim() !== "");
  
      const allBooksArrays = await Promise.all(
        filteredCategories.map(cat => getBooksByCategory(cat.list_name))
      );
      allCurrentBooks = allBooksArrays.flat();
  
      renderIndex = 0;
      renderNextBooks();
    } catch (error) {
      console.error("Помилка під час завантаження всіх книг:", error);
    }
  }
  export function renderNextBooks() {
    const booksToRender = allCurrentBooks.slice(renderIndex, renderIndex + 24);
    renderIndex += booksToRender.length;
  

    if (renderIndex === booksToRender.length) {
      refs.bookList.innerHTML = "";
    }
  
    renderBooksList(booksToRender);
    updateBooksCounters(renderIndex, allCurrentBooks.length);
  

    if (renderIndex < allCurrentBooks.length) {
      refs.showMore.classList.remove("is-hidden");
    } else {
      refs.showMore.classList.add("is-hidden");
    }
  }
  



initAllBooks();
renderCategoriesOption();
renderCategories();
refs.bookCategory.addEventListener('click', handleCategoryClick)
// refs.bookCategoryOption.addEventListener('change', handleCategorySelect);
refs.showMore.addEventListener("click", renderNextBooks);
document.body.addEventListener("click", handleBookButtonClick);


