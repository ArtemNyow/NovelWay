import { refs } from './refs';

(() => {
  const {
    openMobileBtn,
    closeMobileBtn,
    mobileMenu,
    navLinks,
    mobileMenuContainer,
  } = refs;
  const body = document.body;

  openMobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    body.classList.add('no-scroll');
    mobileMenuContainer.classList.add('animate-in');
  });

  closeMobileBtn.addEventListener('click', () => {
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
