$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    autoplay: true,
})

$('.mobile-nav').on('click', function(){

  $(this).toggleClass('active');
  $('.is-mobile').toggleClass('show');
});
