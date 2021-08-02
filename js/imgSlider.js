$(document).ready(function(){
  var swiper = new Swiper("#mainContent .happyPlay__slide__container", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 767px
      768: {
        slidesPerView: 2,
        spaceBetween: 30 
      }
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $('.happyPlaySlide').css("transform","translate3d(29px, 0px, 0px)");
  
});



