import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,

    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
export const useOverviewSlider = () => {
  new Swiper('.gallery__slider', {
    slidesPerView: 2.5,
    centeredSlides: false,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      1201: {
        slidesPerView: 2.4,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 32,
      },
      993: {
        slidesPerView: 2.2,
        spaceBetween: 25,
      },
      769: {
        slidesPerView: 2.2,
        spaceBetween: 25,
        initialSlide: 1,
        centeredSlides: true,
      },
      577:{
        slidesPerView: 1.5,
        spaceBetween: 20,
        initialSlide: 1,
        
        centeredSlides: true,
      
      },
      381:{
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 1,
        
        centeredSlides: true,
      },
      319:{
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 1,
        
        centeredSlides: true,
      },
    },
  });
};
export const useArticleSlider = () =>{
  new Swiper('.article__slider', {
    modules: [Navigation],
    spaceBetween: 2.5,
    slidesPerView: 3,
  
    navigation: {
      nextEl: '.article__controls-next',
      prevEl: '.article__controls-prev',
    },
    breakpoints: {
      1201: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      993:{
        slidesPerView: 2,
        spaceBetween: 32,
      },
      769:{
        slidesPerView: 1,
        spaceBetween: 32,
      },
      577:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      381:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      309:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },

  
  });
}
