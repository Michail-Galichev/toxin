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
      onSelect: function(fd, d, picker) {
        $(".js-arrival-date").val(fd.split("-")[0]);
        $(".js-departure-date").val(fd.split("-")[1]);
      }
  });

  
  
  $('.datepicker')
  .append('<div class="js-datepicker__buttons datepicker__buttons"></div>');
  $('.js-datepicker__buttons')
  .append('<div class="js-datepicker__clear datepicker__button">Очистить</div>')
  .append('<div class="js-datepicker__to-apply datepicker__button">Применить</div>');

  function calendarDropdown(){
  
  const $dropdownCalendar = $('.js-search-room__calendar');
  const $elementsOpenClose = $(`.js-arrival-date,
  .js-expand-more--arrival-date,
  .js-departure-date, 
  .js-expand-more--departure-date`);
  
  
  $(`.js-arrival-date, 
  .js-departure-date`).val('');
  
  /*открыть/закрыть dropdown */    
  $elementsOpenClose.on('click',function(){
    $dropdownCalendar.fadeToggle();
  });
  
  $(document).mouseup(function(e) {
     if (! $elementsOpenClose.is(e.target) && $elementsOpenClose.has(e.target).length === 0 &&
     ! $dropdownCalendar.is(e.target) && $dropdownCalendar.has(e.target).length === 0){
        $dropdownCalendar.fadeOut();
        $('.js-arrival-date')
        .css({
        'border' : '1px solid rgba(31, 32, 65, 0.25)'
      });
      $('.js-departure-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.25)'
      });
        }
  });
  
  $('.js-datepicker__to-apply').click(function(){
    $dropdownCalendar.hide();   
  });

  $('.js-datepicker__clear').click(function(){
    let myDatepicker = $('.js-calendar').datepicker().data('datepicker');
    myDatepicker.clear();
  });
  

/*события клик и hover для полей ввода даты  */
  let clickOnOff = false;
  $('.js-expand-more--departure-date, .js-departure-date')
  .click(function(){
      clickOnOff = true;
      $('.js-departure-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.5)'
     });
     $('.js-arrival-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.25)'
     });
  })
  .hover(function(){
      $('.js-departure-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.5)'
    });
  },  function(){
        if (clickOnOff == true){
        $('.js-departure-date')
        .css({
          'border' : '1px solid rgba(31, 32, 65, 0.5)'
        });
      } else {
        $('.js-departure-date')
        .css({
          'border' : '1px solid rgba(31, 32, 65, 0.25)'
        });
      }
    });
    
    $('.js-expand-more--arrival-date, .js-arrival-date')
  .click(function(){
      clickOnOff = true;
      $('.js-arrival-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.5)'
     });
     $('.js-departure-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.25)'
     });
  })
  .hover(function(){
      $('.js-arrival-date')
      .css({
        'border' : '1px solid rgba(31, 32, 65, 0.5)'
    });
    },  function(){
        if (clickOnOff == true){
        $('.js-arrival-date')
        .css({
          'border' : '1px solid rgba(31, 32, 65, 0.5)'
        });
      } else {
        $('.js-arrival-date')
        .css({
          'border' : '1px solid rgba(31, 32, 65, 0.25)'
        });
      }
    });
}  

calendarDropdown();

});
