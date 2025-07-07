import { refs } from "./refs";

export function updateBooksCounters(visibleCount, totalCount) {
    refs.booksСount.textContent = visibleCount;
    refs.booksTotal.textContent = totalCount;
  }
  