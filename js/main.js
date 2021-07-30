
  var swiper = new Swiper(".visual__container.swiper-container", {
    spaceBetween: 30,
    //centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    progress: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });


  $('.autoplayStart').on('click', function(){
    swiper.autoplay.start();
    $(this).toggle().siblings().toggle();
    return false;
  });

  $('.autoplayStop').on('click', function(){
    swiper.autoplay.stop();
    $(this).toggle().siblings().toggle();
    return false;
  });