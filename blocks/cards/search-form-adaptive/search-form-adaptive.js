$( function(){
  $('.dropdown-guests-empty__form').css({
    'display' : 'none',
    'border-radius' : '4px',
    'border' : '1px solid  rgba(31, 32, 65, 0.25)'
  });
  $('.js-guests-wrapper--adaptive .js-guests-filled-in__input')
  .attr('placeholder','Сколько гостей')
  
  
  $('.js-search-form__date--adaptive .date-dropdown')
  .css({
    'flex-direction': 'column'
  });

});