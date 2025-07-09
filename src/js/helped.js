import { refs } from './refs';

export function updateBooksCounters(visibleCount, totalCount) {
  refs.booksCount.textContent = visibleCount;
  refs.booksTotal.textContent = totalCount;
}

export function showBooksLoader() {
  refs.loaderEl.classList.remove('is-hidden');
}

export function hideBooksLoader() {
  refs.loaderEl.classList.add('is-hidden');
}
