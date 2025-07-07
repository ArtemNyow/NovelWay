import axios from 'axios';
import iziToast from 'izitoast';

const BASE_URL = 'https://books-backend.p.goit.global/books';

export async function getCategories() {
  try {
    const res = await axios.get(`${BASE_URL}/category-list`);
    return res.data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getTopBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/top-books`);
    return res.data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getBooksByCategory(category) {
  try {
    const res = await axios.get(`${BASE_URL}/category`, {
      params: { category },
    });
    return res.data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getBookById(bookId) {
  try {
    const res = await axios.get(`${BASE_URL}/${bookId}`);
    return res.data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}
