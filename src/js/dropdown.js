const toggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');
const links = document.querySelectorAll('.dropdown-menu a');
const label = document.querySelector('.dropdown-label');

toggle.addEventListener('click', (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  }
});

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const selectedCategory = link.dataset.category || link.textContent; 
    label.textContent = selectedCategory;

    dropdown.classList.remove('open');
  });
});