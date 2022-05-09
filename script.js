$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1500,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1691,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1131,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        settings: {
          
        }
      
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]           
});

$(document).ready(function(){
  $('.menu-btn').click(function(event){
    $('.menu-btn').toggleClass('activebtn');
    $('.burger-menu').toggleClass('activebrg')
  });
});
