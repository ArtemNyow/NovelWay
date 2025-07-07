import { getCategories, getBooksByCategory } from "./api/bookApi";
import { refs } from "./refs";
import { renderBooksList, renderCategories, renderCategoriesOption } from "./render-functions";

const initAllBooks = async () => {
  try {
    const categories = await getCategories();
    const filteredCategories = categories.filter(cat => cat.list_name.trim() !== "");

    const allBooksArrays = await Promise.all(
      filteredCategories.map(cat => getBooksByCategory(cat.list_name))
    );
    const allBooks = allBooksArrays.flat();
    const booksToRender = allBooks.slice(0, 24);
    renderBooksList(booksToRender);
  } catch (error) {
    console.error("Помилка під час завантаження всіх книг:", error);
  }
};



initAllBooks();
renderCategoriesOption();
renderCategories();
refs.bookCategory.addEventListener('click',categoryClick)
