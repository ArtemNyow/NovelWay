import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const userFeedbackSwiper = new Swiper('.user-feedback-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: false,
  navigation: {
    nextEl: '.user-swiper-button-next',
    prevEl: '.user-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  on: {
    init: updateButtonsState,
    slideChange: updateButtonsState,
  },
});

function updateButtonsState(swiper) {
  const prevBtn = document.querySelector('.user-swiper-button-prev');
  const nextBtn = document.querySelector('.user-swiper-button-next');

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
