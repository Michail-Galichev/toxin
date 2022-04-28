$( function(){
  $('.booking-form__guests-wrapper')
  .find('.text-field-dropdown__input')
  .attr('placeholder', '3 гостя');

  $('.booking-form__button-wrapper .button__price')
  .html('забронировать');

  $('.booking-form__date-wrapper .js-arrival-date')
  .attr('placeholder', '19.08.2019');
  $('.booking-form__date-wrapper .js-departure-date')
  .attr('placeholder', '23.08.2019');
});