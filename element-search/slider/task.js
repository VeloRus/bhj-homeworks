const prevSlide = document.querySelector('.slider__arrow_prev');
const nextSlide = document.querySelector('.slider__arrow_next');

const slideItem = document.querySelectorAll('.slider__item');
let currentSlide = 0;
let maxCurrentSlide = slideItem.length - 1;

prevSlide.onclick = () => {
   slideItem[currentSlide].classList.toggle('slider__item_active');
   if (currentSlide === 0) {
      currentSlide = maxCurrentSlide;
   } else {
      currentSlide--;
   }
   slideItem[currentSlide].classList.toggle('slider__item_active');
};

nextSlide.onclick = () => {
   slideItem[currentSlide].classList.toggle('slider__item_active');
   if (currentSlide === maxCurrentSlide) {
      currentSlide = 0;
   } else {
      currentSlide++;
   }
   slideItem[currentSlide].classList.toggle('slider__item_active');
};

