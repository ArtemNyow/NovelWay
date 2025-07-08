import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.events-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  loop: false,
  roundLengths: true,

  navigation: {
    nextEl: '.events-swiper-button-next',
    prevEl: '.events-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
      allowSlideNext:false
    },
  },
  on: {
    init: updateButtonsState,
    slideChange: updateButtonsState,
  },
});

function updateButtonsState(swiper) {
  const prevBtn = document.querySelector('.events-swiper-button-prev');
  const nextBtn = document.querySelector('.events-swiper-button-next');

  if (!prevBtn || !nextBtn) return;

  if (swiper.isBeginning) {
    prevBtn.disabled = true;
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
  }
}
