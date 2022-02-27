$(function() {
  $('.registration-form__user-name-wrapper .text-field-default__input:first')
  .attr('placeholder', 'Имя');
  
  $('.registration-form__user-name-wrapper .text-field-default__input:last')
  .attr('placeholder', 'Фамилия');

  $('.registration-form__data-service-wrapper .text-field-default__input:last')
  .attr('placeholder', 'Пароль')
  .attr('type', 'password');

  $('.registration__form-wrapper .button__border')
  .attr('href', '/__/sign-in/sign-in.html');

});