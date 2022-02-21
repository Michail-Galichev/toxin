$(function(){

  $('.js-calendar').datepicker({
      navTitles : {
          days: 'MM <i>yyyy</i>',
          months: 'yyyy',
          years: 'yyyy1 - yyyy2'
      },
      range: true,
      multipleDatesSeparator : '-',
      prevHtml : '<div class="arrov-prev">arrow_forward</div>',
      nextHtml : '<div class="arrov-next">arrow_forward</div>',  
      сlearButton : true
  });

  $('.datepicker')
  .append('<div class="js-datepicker__buttons datepicker__buttons"></div>');
  $('.js-datepicker__buttons')
  .append('<div class="js-datepicker__clear datepicker__button">Очистить</div>')
  .append('<div class="js-datepicker__to-apply datepicker__button">Применить</div>');

  $('.js-datepicker__clear').click(function(){
    let myDatepicker = $('.js-calendar').datepicker().data('datepicker');
    myDatepicker.clear();
  })
});
