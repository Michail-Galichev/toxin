$(function(){
  
  $('.js-header__burger').click(function(){    
  const $mediaQuery = window.matchMedia('(min-width: 993px)')
  $('.js-burger-wrapper').show();
  $('.js-header').hide();

  function $closeBurger (e) {
    if (e.matches) {
      $('.js-burger-wrapper').hide();
      $('.js-header').show();
    }
  }
  
  $mediaQuery.addListener($closeBurger);
  $closeBurger($mediaQuery);
});

$('.js-burger-wrapper .js-close-button').click(function() {
  $('.js-burger-wrapper').hide();
  $('.js-header').show();
});



});