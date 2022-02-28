$ ( function(){

  $('.registration-form__first-name-wrapper')
  .find('.text-field-default__input:first')
  .attr('placeholder', 'Имя');

  $('.registration-form__last-name-wrapper')
  .find('.text-field-default__input:last')
  .attr('placeholder', 'Фамилия');

  $('.registration-form__email-wrapper ')
  .find('.text-field-default__input:first')
  .attr('placeholder', 'Email').attr('type', 'email');

  $('.registration-form__password-wrapper ')
  .find('.text-field-default__input:last')
  .attr('placeholder', 'Пароль').attr('type', 'password');

  $('.radio__header').css({
    'margin-bottom' : '0'
  });

  $('.registration-form__account-button-wrapper .button__border').css({
    'margin-right' : '0'
  });


  $('.registration-form__button-wrapper  .button__price').html('перейти к оплате');

});