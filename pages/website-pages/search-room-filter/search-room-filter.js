$(function(){
  $('.filter__masked-field-wrapper .masked-text-field__input')
  .css({
    'width' : '266px'
  });

  $('.filter__guests-dropdown-wrapper .dropdown-guests-empty__input')
  .css({
    'width' : '266px',
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'border-radius' : '4px'
  });

  $('.filter__guests-dropdown-wrapper .dropdown-guests-empty__expand-more')
  .css({
    'left' : '220px'
  });

  $('.filter__comfort-wrapper .dropdown-com-exp__form')
  .css({
    'display' : 'none'
  });

  $('.filter__comfort-wrapper .dropdown-com-exp__input')
  .css({
    'border-radius' : '4px',
    'border' : '1px solid rgba(31, 32, 65, 0.25)'
  })

  $('.filter__room-row-wrapper') 
  .find('.room-card__form:not(:last)')
  .css({
    'margin-right' : '12px'
  });

  $('.filter__room-row-wrapper') 
  .find('.room-card__luxury')
  .css({
    'margin-left' : '8px'
  });

  $('.filter__cards-room-wrapper .filter__room-row-wrapper:last')
  .css({
    'margin-bottom' : '0'
  });

});