import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: updateButtonsState,
    slideChange: updateButtonsState,
  },
});


function updateButtonsState(swiper) {
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