$(function(){
  $('.js-pref__masked-field .js-mask-text-field__input')
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

  
  $('.js-pref__guest-dropdown .js-drop-guests-emp__input')
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

  $('.js-pref__guest-dropdown .js-guests-emp__expand-more')
  .css({
    'left' : '222px'
  });

  $('.js-pref__comfort .js-drop-com-exp__form')
  .css({
    'display' : 'block'
  });

  $('.js-pref__comfort .js-drop-com-exp__input')
  .attr('placeholder', '')
  .val('2 спальни, 2 кровати... ')
  .css({
    'border' : '1px solid rgba(31, 32, 65, 0.5)',
    'font-family' : 'Montserrat',
    'font-style' : 'normal',
    'font-weight' : 'normal',
    'font-size' : '14px',
    'line-height' : '24px',
    'color' : 'rgba(31, 32, 65, 0.75)'
  });

  $('.js-pref__room-row') 
  .find('.js-room-card__form:not(:last)')
  .css({
    'margin-right' : '12px'
  });

  $('.js-pref__room-row') 
  .find('.js-room-card__luxury')
  .css({
    'margin-left' : '8px'
  });

  $('.js-pref__cards-room .js-pref__room-row:last')
  .css({
    'margin-bottom' : '0'
  });

  $('.js-pref__additional-amenities .js-preferences-advanced')
  .css({
    'display' : 'none'
  });

  $('.js-pref__additional-amenities .js-preferences__expand-more')
  .css({
    'transform' : 'rotate(0deg)'
  });

  $('.js-pref__comfort')
  .find('.js-com-count--first, .js-com-count--average')
  .attr('placeholder', '2');
  

});