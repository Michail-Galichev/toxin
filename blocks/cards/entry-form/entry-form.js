$(function(){

  $('.js-entry-form__password .js-text-field-default__input')
  .attr('placeholder', 'Пароль')
  .attr('type', 'password');

  $('.js-entry-form__email .js-text-field-default__input')
  .attr('type', 'email');

  $('.js-entry-form__button-wrapper  .js-button__price')
  .html('войти');
  $('.entry-form__account-wrapper .js-button__border')
  .attr('href', '/__/registration/registration.html');
});