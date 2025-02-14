/* в этот файл добавляет скрипты*/

/* Swiper */
const swiper = new Swiper(".hero-swiper", {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 1000,
  pagination: {
    el: ".hero-swiper__pagination",
    bulletClass: "hero-swiper__pagination-bullet",
    bulletActiveClass: "hero-swiper__pagination-bullet--active",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-swiper__button--next",
    prevEl: ".hero-swiper__button--prev",
  },
  a11y: {
    prevSlideMessage: "Следующий слайд",
    nextSlideMessage: "Предыдущий слайд",
  },
});
