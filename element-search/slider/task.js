const prevSlide = document.querySelector('.slider__arrow_prev');
const nextSlide = document.querySelector('.slider__arrow_next');
const slideItem = Array.from(document.querySelectorAll('.slider__item'));

prevSlide.onclick = () => {
   let activeSlide = slideItem.findIndex((i) => i.className.includes("slider__item_active"));
   slideItem[activeSlide].className = 'slider__item';
  if (activeSlide < slideItem.length - 1) {
   activeSlide++;
  } else {
   activeSlide = 0;
  }
  slideItem[activeSlide].className = 'slider__item slider__item_active';
};


nextSlide.onclick = () => {
   let activeSlide = slideItem .findIndex((i) => i.className.includes("slider__item_active"));
   slideItem [activeSlide].className = 'slider__item';
   if (activeSlide > 0) {
      activeSlide--;
   } else {
      activeSlide = slideItem.length - 1;
   }
   slideItem [activeSlide].className = 'slider__item slider__item_active';
 };
