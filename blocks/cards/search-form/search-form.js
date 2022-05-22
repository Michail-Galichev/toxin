$( function(){
  $('.dropdown-guests-empty__form').css({
    'display' : 'none',
    'border-radius' : '4px',
    'border' : '1px solid  rgba(31, 32, 65, 0.25)'
  });
  $('.search-form__guests-wrapper .js-guests-filled-in__input')
  .attr('placeholder','Сколько гостей');
  $('.js-search-form__button .js-button__price')
  .html('подобрать номер');
  
});