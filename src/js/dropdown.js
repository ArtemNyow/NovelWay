// const toggle = document.querySelector('.dropdown-toggle');
// const dropdown = document.querySelector('.dropdown');

// toggle.addEventListener('click', () => {
//   dropdown.classList.toggle('open');
// });

// document.addEventListener('click', (event) => {
//   if (!dropdown.contains(event.target)) {
//     dropdown.classList.remove('open');
//   }
// });

const toggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');
const links = document.querySelectorAll('.dropdown-menu a');


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
    
    toggle.childNodes[0].textContent = selectedCategory;

    dropdown.classList.remove('open');
  });
});