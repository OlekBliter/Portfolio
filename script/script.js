window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 2000);
}
$(document).ready(function () {
  $('#pagepiling').pagepiling({
    navigation: {
      'textColor': 'white',
      'bulletsColor': 'white',
      'position': 'right',
      'tooltips': ['Home', 'Projects', 'About Me', 'Contact']
    },
  });
});
new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});