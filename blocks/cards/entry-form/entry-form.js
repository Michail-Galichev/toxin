$(function(){

  $('.js-entry-form__password .js-text-field-default__input')
  .attr('placeholder', 'Пароль')
  .attr('type', 'password');

  $('.js-entry-form__email .js-text-field-default__input')
  .attr('type', 'email');

  $('.js-entry-form__button   .js-button__price')
  .html('войти');
  $('.js-entry-form__account-button .js-button__border')
  .html('создать');
});