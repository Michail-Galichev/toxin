$(function(){
  $('.js-guests-dropdown__search-form')
  .find('.js-dropdown-guests-filled-in__form')
  .css({
    'display' : 'flex'
  });

  $('.js-guests-dropdown__search-form--adaptive')
  .find('.js-dropdown-guests-filled-in__form')
  .css({
    'display' : 'flex'
  });

  $('.js-guests-dropdown__search-form--adaptive')
  .find('.js-guests-filled-in__input')
  .css({
    'border' : '1px solid rgba(31, 32, 65, 0.5)'
  });
  
  $('.js-guests-dropdown__search-form')
  .find('.js-guests-filled-in__input')
  .css({
    'border' : '1px solid rgba(31, 32, 65, 0.5)'
  });

  $('.js-header-wrapper .js-header__buttons')
  .css({
    'margin-top' : '2px'
  });
  $('.js-header-wrapper .js-header__logo')
  .css({
    'margin-top' : '16px'
  });

  function $changeBackground (){ 
    var $backgrounds = [
      '/landing-page.1c9b862d.png',
      '/landing-page2.d9c64f6e.png',
      '/landing-page3.1beb304b.png'
      ]
      var $currentImage = 0;
      (function $showNextImage() {
        var $backgroundBlock = $('.js-guests-dropdown__background');
        $backgroundBlock.css(
          'background-image', 'url(' + $backgrounds[$currentImage] + ')'
        );
        $currentImage += 1
        if ($currentImage >= $backgrounds.length) {
          $currentImage = 0
        }
        setTimeout($showNextImage, 5000)
      }())
   }
  $changeBackground ();

});