 $(function(){
  $('.js-calendar').datepicker({
    navTitles : {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },
    range: true,
    multipleDatesSeparator : ' - ',
    prevHtml : '<div class="arrov-prev">arrow_forward</div>',
    nextHtml : '<div class="arrov-next">arrow_forward</div>',  
   onSelect: function(fd) {
      $(".js-mask-text-field__input").val(fd);
      
    }
});

$('.datepicker')
.append('<div class="js-datepicker__buttons datepicker__buttons"></div>');
$('.js-datepicker__buttons')
.append('<div class="js-datepicker__clear datepicker__button">Очистить</div>')
.append('<div class="js-datepicker__to-apply datepicker__button">Применить</div>');

$('.js-filter__masked-field .js-mask-text-field__input')
  .css({
    'font-family' : 'Montserrat',
    'font-style': 'normal',
    'font-weight' : '400',
    'font-size' : '14px',
    'line-height' : '24px',
    'color' : 'rgba(31, 32, 65, 0.75)'
  });


  function calendarDropdown(){
    const $inputDate = $('.js-mask-text-field__input');
    const $dropdownCalendar = $('.js-filter__calendar');
    const $elementsOpenClose = $(`.js-mask-text-field__input,
    .js-filter__expand-more`);
    
    $dropdownCalendar.css({
      'display' : 'none'
    });
    $('.js-mask-text-field__input').val('');
    
    /*открыть/закрыть dropdown */    
    let clickOnOff = false;
    $elementsOpenClose.on('click',function(){
      clickOnOff = true;
      let display = $dropdownCalendar.css('display');
      $dropdownCalendar.fadeToggle();
      if (display == 'none'){
        $inputDate.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
      }); 
      } else{ 
        clickOnOff = false;
        $inputDate.css({
        'border-radius' : '4px',
        'border': '1px solid rgba(31, 32, 65, 0.25)'});            
       }
  });

  $elementsOpenClose.hover(
    function(){
       $inputDate.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
       });
    }, function(){
      if (clickOnOff == true){
      $inputDate.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
       });
      } else {  
        $inputDate.css({
          'border': '1px solid rgba(31, 32, 65, 0.25)'
         });
      }  
    }
  );
    
    $(document).mouseup(function(e) {
       if (! $elementsOpenClose.is(e.target) && $elementsOpenClose.has(e.target).length === 0 &&
       ! $dropdownCalendar.is(e.target) && $dropdownCalendar.has(e.target).length === 0){
          $dropdownCalendar.fadeOut()
          $inputDate
          .css({
          'border' : '1px solid rgba(31, 32, 65, 0.25)'
        });
          clickOnOff = false;
      } 
   });
    
    $('.js-datepicker__to-apply').click(function(){
      $dropdownCalendar.hide();   
    });
  
    $('.js-datepicker__clear').click(function(){
      let myDatepicker = $('.js-calendar').datepicker().data('datepicker');
      myDatepicker.clear();
    });
}

calendarDropdown();

});