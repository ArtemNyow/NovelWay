import { refs } from "./refs";



window.addEventListener('scroll', () => {
  const windowWidth = window.innerWidth;
  let scrollTrigger;

  if (windowWidth < 768) {
    scrollTrigger = 200; 
  } else if (windowWidth < 1440) {
    scrollTrigger = 300; 
  } else {
    scrollTrigger = 500; 
  }

  if (window.scrollY > scrollTrigger) {
    refs.scrollUpBtn.classList.add('show');
  } else {
    refs.scrollUpBtn.classList.remove('show');
  }
});



refs.scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});