const scrollUpBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  const windowWidth = window.innerWidth;
  let scrollTrigger;

  if (windowWidth < 768) {
    scrollTrigger = 200; // мобільні — раніше зʼявляється
  } else if (windowWidth < 1440) {
    scrollTrigger = 300; // планшети
  } else {
    scrollTrigger = 500; // десктопи — пізніше
  }

  if (window.scrollY > scrollTrigger) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
});



// window.addEventListener('scroll', () => {
//   if (window.scrollY > 200) {
//     scrollUpBtn.classList.add('show');
//   } else {
//     scrollUpBtn.classList.remove('show');
//   }
// });


scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});