$(function(){
  $('.js-check__masked-field .js-mask-text-field__input')
  .attr('placeholder', '')
  .val('19 авг - 23 авг')
  .css({
    'width' : '266px',
    'font-family' : 'Montserrat',
    'font-style' : 'normal',
    'font-weight' : 'normal',
    'font-size' : '14px',
    'line-height' : '24px',
    'color' : 'rgba(31, 32, 65, 0.75)'
  });

  
  $('.js-check__guest-dropdown .js-drop-guests-emp__input')
  .attr('placeholder', '')
  .val('3 гостя, 1 младенец')
  .css({
    'width' : '266px',
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'border-radius' : '4px',
    'font-family' : 'Montserrat',
    'font-style' : 'normal',
    'font-weight' : 'normal',
    'font-size' : '14px',
    'line-height' : '24px',
    'color' : 'rgba(31, 32, 65, 0.75)'
  });

  $('.js-check__guest-dropdown .js-guests-emp__expand-more')
  .css({
    'left' : '220px'
  });

  $('.js-check__comfort .js-com-exp__form')
  .css({
    'display' : 'none'
  });

  $('.js-check__comfort .js-drop-com-exp__input')
  .attr('placeholder', '')
  .val('2 спальни, 2 кровати... ')
  .css({
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'font-family' : 'Montserrat',
    'font-style' : 'normal',
    'font-weight' : 'normal',
    'font-size' : '14px',
    'line-height' : '24px',
    'color' : 'rgba(31, 32, 65, 0.75)'
  });

  $('.js-check__room-row') 
  .find('.js-room-card__form:not(:last)')
  .css({
    'margin-right' : '12px'
  });

  $('.js-check__room-row') 
  .find('.js-room-card__luxury')
  .css({
    'margin-left' : '8px'
  });

  $('.js-check__cards-room .js-check__room-row:last')
  .css({
    'margin-bottom' : '0'
  });

  $('.js-check__additional-amenities .js-checkbox-list-advanced')
  .css({
    'display' : 'block'
  });

  $('.js-check__additional-amenities .js-checkbox-list-advanced__expand-more')
  .css({
    'transform' : 'rotate(180deg)'
  });

  $('.js-check__comfort')
  .find('.js-com-count--first, .js-com-count--average')
  .attr('placeholder', '2');
  

});