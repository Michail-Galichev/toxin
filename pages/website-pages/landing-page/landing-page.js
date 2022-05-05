$(function(){

function openCloseDropdown(){

  const $btnOpenClose = $('.js-guests-filled-in__expand-more, .js-guests-filled-in__input');
  const $dropdownGuests = $('.js-dropdown-guests-filled-in__form');
  const $guestInput = $('.js-guests-filled-in__input');
  

/*открыть/закрыть dropdown */    
  let clickOnOff = false;
  $btnOpenClose.click(function () {
    clickOnOff = true;
      let display = $dropdownGuests.css('display');
      $dropdownGuests.fadeToggle();
      if (display == 'none'){
        $guestInput.css({
              'border-bottom-left-radius' : '0px',
              'border-bottom-right-radius' : '0px',
              'border': '1px solid rgba(31, 32, 65, 0.5)'
             }); 
      } else {
        clickOnOff = false;
        $guestInput.css({
        'border-radius' : '4px',
        'border': '1px solid rgba(31, 32, 65, 0.5)'});
      }  
  });

  $btnOpenClose.hover(
    function(){
      $guestInput.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
       });
    }, function(){
      if (clickOnOff == true){
      $guestInput.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
       });
      } else{
        $guestInput.css({
          'border': '1px solid rgba(31, 32, 65, 0.25)'
         });
      }  
    }
  );

  /*клик по странице*/

  $(document).mouseup(function(e){
      if (! $btnOpenClose.is(e.target) &&
       $btnOpenClose.has(e.target).length === 0 && 
       ! $dropdownGuests.is(e.target) && $dropdownGuests.has(e.target).length === 0){
           $dropdownGuests.fadeOut();
           clickOnOff = false;
           $guestInput.css({
             'border-radius' : '2px',
             'border': '1px solid rgba(31, 32, 65, 0.25)'
            });
       }
  });

  /*кнопка применить*/     
$('.js-dropdown__to-apply').click(function(){
  $dropdownGuests.hide();       
  $guestInput.css({'border-radius' : '2px'});
});
}


/*Функция подсчёта гостей */

function counterGuests (){
  const $guestInputVal = $('.js-guests-filled-in__input');
  let $countFirst = 0;
  let $countAverage = 0;
  let $countLast = 0;
  let $sumGuests = 0;
  $('.js-count--first').val(0);
  $('.js-count--average').val(0);
  $('.js-count--last').val(0);
  
  
  /*Нажатие кнопок +/- пункт взрослые */
  $('.js-plus--first').click(function(){     
    $countFirst++;
      
      $('.js-count--first').val($countFirst);
      $('.js-minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js-minus--first').click(function(){     
      if ($countFirst > 0){
      $countFirst--;
      $('.js-count--first').val($countFirst);
  } 
      if ($countFirst === 0){
      $('.js-minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

/*Нажатие кнопок +/- пункт дети*/

  $('.js-plus--average').click(function(){     
    $countAverage++;
     $('.js-count--average').val($countAverage);
      $('.js-minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js-minus--average').click(function(){     
      if ($countAverage > 0){
        $countAverage--;
      $('.js-count--average').val($countAverage);
  } 
      if ($countAverage === 0){
      $('.js-minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  
  /*Нажатие кнопок +/- пункт младенцы */
  $('.js-plus--last').click(function(){     
      $countLast++;
      $('.js-count--last').val($countLast);
      $('.js-minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js-minus--last').click(function(){     
      if ($countLast > 0){
          $countLast--;
      $('.js-count--last').val($countLast);
  } 
      if ($countLast === 0){
      $('.js-minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  
  /* кнопка очистить*/   
  $('.js-dropdown__clear').click(function(){
      $(this).hide();
      $('.js-count--first').val(0);
      $countFirst = 0;
      $('.js-count--average').val(0);
      $countAverage = 0;
      $('.js-count--last').val(0);
      $countLast = 0;
      $guestInputVal.attr('value', 'Сколько гостей').css({
        'color' : 'rgba(31, 32, 65, 0.25)'
    });
      
      $('.js-minus--first,.js-minus--average,.js-minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'
    })
});

/*Общее количество гостей*/

$(`.js-minus--first,.js-minus--average,.js-minus--last,
 .js-plus--first,.js-plus--average,.js-plus--last`).click(function(){
  $sumGuests = $countFirst + $countAverage + $countLast;
  if ($sumGuests === 0){
    $('.js-dropdown__clear').hide();
        
  } else {
    $('.js-dropdown__clear').show();
    $guestInputVal.css({
        'color' : 'rgba(31, 32, 65, 0.75)',
        'font-family' : 'Montserrat',
        'font-size' : '14px',
        'line-height' : '18px'        
    });
  }

  if ($sumGuests === 1 && $countLast === 0 ){
    $guestInputVal.attr('value', $sumGuests + ' гость' );
  } else if ($sumGuests === 1 && $countLast === 1){
    $guestInputVal.attr('value', $sumGuests + ' гость' + ', ' + $countLast + ' младенец' );  
  } else if ($sumGuests === 2 && $countLast === 0){
    $guestInputVal.attr('value', $sumGuests + ' гостя');
  } else if ($sumGuests === 2 && $countLast === 1){
    $guestInputVal.attr('value', $sumGuests + ' гостя' + ', ' + $countLast + ' младенец' );    
  } else if ($sumGuests === 2 && $countLast === 2){
    $guestInputVal.attr('value', $sumGuests + ' гостя' + ', ' + $countLast + ' младенца' );    
  } else if ($sumGuests > 1 && $sumGuests < 5){
      if ($sumGuests > 1 && $sumGuests < 5 && $countLast === 1){
        $guestInputVal.attr('value', $sumGuests + ' гостя' + ', ' + $countLast + ' младенец');
      } else if ($sumGuests > 1 && $sumGuests < 5 && $countLast > 1){
        $guestInputVal.attr('value', $sumGuests + ' гостя' + ', ' + $countLast + ' младенца');
      } else  $guestInputVal.attr('value', $sumGuests + ' гостя');    
  } else if ($sumGuests > 4){
      if ($sumGuests > 4 && $countLast > 4){
        $guestInputVal.attr('value', $sumGuests + ' гостей' + ', ' + $countLast + ' младенцев');        
      } else if ($sumGuests > 4 && $countLast === 1 ){
        $guestInputVal.attr('value', $sumGuests + ' гостей' + ', ' + $countLast + ' младенец ');        
      } else if ($sumGuests > 4 && $countLast > 1 && $countLast < 5){
        $guestInputVal.attr('value', $sumGuests + ' гостей' + ', ' + $countLast + ' младенца');        
      } else $guestInputVal.attr('value', $sumGuests + ' гостей');    
  } else if ($sumGuests === 0){
    $guestInputVal.attr('value', 'Сколько гостей' ).css({
        'color' : 'rgba(31, 32, 65, 0.5)'
    });
      $('.js-dropdown__clear').hide();
  }
  
  
});
  
}
 
  $('.js-landing-page__search-form')
  .find('.js-guests-filled-in__input')
  .css({
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'border-radius' : '2px'
  })
  .attr('placeholder', 'Сколько гостей');

  $('.js-landing-page__search-form')
  .find('.js-date-dropdown__input:last')
  .attr('placeholder', 'ДД.ММ.ГГГГ');
  $('.js-header-wrapper .js-header__buttons')
  .css({
    'margin-top' : '2px'
  });
  $('.js-header-wrapper .js-header__logo')
  .css({
    'margin-top' : '16px'
  });
    
  
counterGuests ();
openCloseDropdown();

});