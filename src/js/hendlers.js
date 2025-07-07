import { initAllBooks } from "./books";
import { refs } from "./refs";

export async function handleCategoryClick(event) {
    const link = event.target.closest('.books__option');
    if (!link) return;
    const categoryName = link.textContent;
    await loadBooksForCategory(categoryName);
}
export async function handleCategorySelect(event) {
    const categoryName = event.target.value;
  
    await loadBooksForCategory(categoryName);
  }
  

  async function loadBooksForCategory(categoryName) {
    refs.bookList.innerHTML = ''; 
    // refs.loader.classList.add('active');
  
    try {
      let books;
      if (categoryName === 'Categories' && categoryName === 'All categories') {
        books = await initAllBooks();
      } else {
        books = await getBooksByCategory(categoryName);
      }
  
      if (books && books.length > 0) {
        renderBooksList(books);
      }
    //   else {
    //     showNoBooksMessage();
    //   }
    } catch (error) {
      iziToast.error({ message: error.message, position: "topRight" });
    }
    // finally {
    //   refs.loader.classList.remove('active');
    // }
  }
  