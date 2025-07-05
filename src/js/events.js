// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const swiper = new Swiper('.swiper', {

//   direction: 'vertical',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },


// });

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

let swiperInstance = null;

function initSwiper() {
  const screenWidth = window.innerWidth;

  // Якщо ширина менше 1024 і Swiper ще не створений
  if (screenWidth < 1024 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      }
    });
  }

  // Якщо ширина >= 1024 і Swiper вже існує — знищити
  if (screenWidth >= 1024 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}
