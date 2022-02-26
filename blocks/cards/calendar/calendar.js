$(function(){

  $('.js--calendar').datepicker({
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
        $(".js--arrival-date").val(fd.split("-")[0]);
        $(".js--departure-date").val(fd.split("-")[1]);
      }
  });

  
  
  $('.datepicker')
  .append('<div class="js-datepicker__buttons datepicker__buttons"></div>');
  $('.js-datepicker__buttons')
  .append('<div class="js--datepicker__clear datepicker__button">Очистить</div>')
  .append('<div class="js--datepicker__to-apply datepicker__button">Применить</div>');

  function calendarDropdown(){
  
  const $dropdownCalendar = $('.js--search-room__calendar');
  const elementsOpenClose = $(`.js--arrival-date,
  .js--expand-more--arrival-date,
  .js--departure-date, 
  .js--expand-more--departure-date`);
  
  
  $(`.js--arrival-date, 
  .js--departure-date`).val('');
  
  /*открыть/закрыть dropdown */    
  elementsOpenClose.on('click',function(){
      $dropdownCalendar.fadeToggle();
  })
  
  $(document).mouseup(function(e) {
     if (! elementsOpenClose.is(e.target) && elementsOpenClose.has(e.target).length === 0 &&
     ! $dropdownCalendar.is(e.target) && $dropdownCalendar.has(e.target).length === 0){
         $dropdownCalendar.fadeOut();
     }
  });
  

  
  $('.js--datepicker__to-apply').click(function(){
    $dropdownCalendar.hide();   
  });

  $('.js--datepicker__clear').click(function(){
    let myDatepicker = $('.js--calendar').datepicker().data('datepicker');
    myDatepicker.clear();
  })
  
  $('.js--expand-more--arrival-date').click(function(){
      $('.js--arrival-date').focus();
  }) 
  $('.js--expand-more--departure-date').click(function(){ 
      $('.js--departure-date').focus();
  }); 
  
}

calendarDropdown();

});
