$(function(){

  $('.entry-form__password-wrapper .text-field-default__input')
  .attr('placeholder', 'Пароль')
  .attr('type', 'password');

  $('.entry-form__email-wrapper .text-field-default__input')
  .attr('type', 'email');

  $('.entry-form__button-wrapper  .button__price')
  .html('войти');
});