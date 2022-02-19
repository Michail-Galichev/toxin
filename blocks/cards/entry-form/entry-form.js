$(function(){
  $('.entry-form__login-details-wrapper')
  .find('.text-field-default__input')
  .css({'margin' : '0px'});

  $('.entry-form__login-details-wrapper')
  .find('.text-field-default__input:last')
  .css({'margin-bottom' : '15px'})
  .attr('placeholder', 'Пароль')
  .attr('type', 'password');

  $('.entry-form__login-details-wrapper')
  .find('.text-field-default__input:first')
  .css({'margin-bottom' : '5px'})
  .attr('type', 'email');

  $('.entry-form__button-wrapper  .button__price')
  .html('войти');
});