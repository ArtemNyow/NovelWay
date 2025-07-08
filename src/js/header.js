import { refs } from "./refs";

(() => {
  const openBtn = document.querySelector('.js-open-menu');
  const closeBtn = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('.js-menu');
  const body = document.body;
  const navLinks = document.querySelectorAll('.js-header-list-link');
  const mobileMenuContainer = document.querySelector('.mobile-menu-container');

  openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    body.classList.add('no-scroll');
    mobileMenuContainer.classList.add('animate-in');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('no-scroll');
    mobileMenuContainer.classList.remove('animate-in');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href.startsWith('#')) return;
      event.preventDefault();
      const targetId = href.slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.remove('is-open');
        body.classList.remove('no-scroll');
        mobileMenuContainer.classList.remove('animate-in');
      }
    });
  });
})();





