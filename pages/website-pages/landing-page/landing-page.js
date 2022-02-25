$(function(){

function openCloseDropdown(){

  const $btnOpenClose = $('.dropdown-guests-filled-in__expand-more, .dropdown-guests-filled-in__input');
  const $dropdownGuests = $('.dropdown-guests-filled-in__form');
  const $guestInput = $('.dropdown-guests-filled-in__input');

/*открыть/закрыть dropdown */    
 
   $btnOpenClose.click(function () {
      let display = $dropdownGuests.css('display');
      $dropdownGuests.fadeToggle();
      if (display == 'none'){
        $guestInput.css({
              'border-bottom-left-radius' : '0px',
              'border-bottom-right-radius' : '0px',
              'border': '1px solid rgba(31, 32, 65, 0.5)'
             }); 
      } else $guestInput.css({
        'border-radius' : '2px',
        'border': '1px solid rgba(31, 32, 65, 0.25)'});
        
  });

  /*клик по странице*/


  $(document).mouseup(function(e){
      if (! $btnOpenClose.is(e.target) &&
       $btnOpenClose.has(e.target).length === 0 && 
       ! $dropdownGuests.is(e.target) && $dropdownGuests.has(e.target).length === 0){
           $dropdownGuests.fadeOut();
           $guestInput.css({
             'border-radius' : '2px',
             'border': '1px solid rgba(31, 32, 65, 0.25)'
            });
       }
  });

  /*кнопка применить*/     
$('.dropdown__to-apply').click(function(){
  $dropdownGuests.hide();       
  $guestInput.css({'border-radius' : '2px'});
});
}




function counterGuests (){
  const $guestInputVal = $('.dropdown-guests-filled-in__input');
  let $countFirst = 0;
  let $countAverage = 0;
  let $countLast = 0;
  let $sumGuests = 0;
  $('.js--count--first').val(0);
  $('.js--count--average').val(0);
  $('.js--count--last').val(0);
  
  
  
  $('.js--plus--first').click(function(){     
    $countFirst++;
      
      $('.js--count--first').val(+$countFirst);
      $('.js--minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js--minus--first').click(function(){     
      if ($countFirst > 0){
      $countFirst--;
      $('.js--count--first').val(+$countFirst);
  } 
      if ($countFirst === 0){
      $('.js--minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  $('.js--plus--average').click(function(){     
    $countAverage++;
     $('.js--count--average').val(+$countAverage);
      $('.js--minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js--minus--average').click(function(){     
      if ($countAverage > 0){
        $countAverage--;
      $('.js--count--average').val(+$countAverage);
  } 
      if ($countAverage === 0){
      $('.js--minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  $('.js--plus--last').click(function(){     
      $countLast++;
      $('.js--count--last').val(+$countLast);
      $('.js--minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js--minus--last').click(function(){     
      if ($countLast > 0){
          $countLast--;
      $('.js--count--last').val(+$countLast);
  } 
      if ($countLast === 0){
      $('.js--minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  /* кнопка очистить*/   
  $('.dropdown__clear').click(function(){
      $(this).hide();
      $('.js--count--first').val(0);
      $countFirst = 0;
      $('.js--count--average').val(0);
      $countAverage = 0;
      $('.js--count--last').val(0);
      $countLast = 0;
      $guestInputVal.attr('value', 'Сколько гостей').css({
        'color' : 'rgba(31, 32, 65, 0.25)'
    });
      
      $('.js--minus--first,.js--minus--average,.js--minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'
    })
});

 $(`.js--minus--first,.js--minus--average,.js--minus--last,
 .js--plus--first,.js--plus--average,.js--plus--last`).click(function(){
  $sumGuests = (+$countFirst) + (+$countAverage) + (+$countLast);
  if ($sumGuests === 0){
    $('.dropdown__clear').hide();
        
  } else {
    $('.dropdown__clear').show();
    $guestInputVal.css({
        'color' : 'rgba(31, 32, 65, 0.75)',
        'font-family' : 'Montserrat',
        'font-size' : '14px',
        'line-height' : '18px'        
    });
  }

    if ($sumGuests === 1 ){
      $guestInputVal.attr('value', $sumGuests + ' гость' );
  } else if($sumGuests > 1 && $sumGuests < 5){
    $guestInputVal.attr('value', $sumGuests + ' гостя' );
  } else if ($sumGuests > 4){
    $guestInputVal.attr('value', $sumGuests + ' гостей' );
  } else if ($sumGuests === 0){
    $guestInputVal.attr('value', 'Сколько гостей' ).css({
        'color' : 'rgba(31, 32, 65, 0.5)'
    });
      $('.dropdown__clear').hide();
  }
});
  
}
 
  $('.landing-page__search-form-wrapper')
  .find('.dropdown-guests-filled-in__input')
  .css({
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'border-radius' : '2px'
  })
  .attr('placeholder', 'Сколько гостей');

  $('.landing-page__search-form-wrapper')
  .find('.date-dropdown__input:last')
  .attr('placeholder', 'ДД.ММ.ГГГГ')
  
counterGuests ();
openCloseDropdown();

});