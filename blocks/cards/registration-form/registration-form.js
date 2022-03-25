$ ( function(){

  $('.js-reg-form__first-name')
  .find('.js-text-field-default__input')
  .attr('placeholder', 'Имя');

  $('.js-reg-form__last-name')
  .find('.js-text-field-default__input')
  .attr('placeholder', 'Фамилия');

  $('.js-reg-form__email')
  .find('.js-text-field-default__input')
  .attr('placeholder', 'Email').attr('type', 'email');

  $('.js-reg-form__password ')
  .find('.js-text-field-default__input')
  .attr('placeholder', 'Пароль').attr('type', 'password');

  $('.js-radio__header').css({
    'margin-bottom' : '0'
  });

  $('.js-reg-form__account-button .js-button__border').css({
    'margin-right' : '0'
  })
  .attr('href', '/__/sign-in/sign-in.html');


  $('.js-reg-form__button  .js-button__price').html('перейти к оплате');

});