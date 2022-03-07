$(function(){
  $('.js--filter__masked-field .js--mask-text-field__input')
  .css({
    'width' : '266px'
  });

  $('.js--filter__guests-dropdown .js--drop-guests-emp__input')
  .css({
    'width' : '266px',
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'border-radius' : '4px'
  });

  $('.js--filter__guests-dropdown .js--guests-emp__expand-more')
  .css({
    'left' : '220px'
  });

  $('.js--filter__comfort .js--com-exp__form')
  .css({
    'display' : 'none'
  });

  $('.js--filter__comfort  .js--drop-com-exp__input')
  .css({
    'border-radius' : '4px',
    'border' : '1px solid rgba(31, 32, 65, 0.25)'
  });

  $('.js--filter__room-row .js--room-card__form:not(:last)')
  .css({
    'margin-right' : '12px'
  });

  $('.js--filter__room-row') 
  .find('.js--room-card__luxury')
  .css({
    'margin-left' : '8px'
  });

  $('.js--filter__cards-room .js--filter__room-row:last')
  .css({
    'margin-bottom' : '0'
  });

  $('.js--filter__additional-amenities .js--checkbox-list-advanced')
  .css({
    'display' : 'none'
  });

  $('.js--filter__additional-amenities .js--checkbox-list-advanced__expand-more ')
  .css({
    'transform' : 'rotate(0deg)'
  });

});