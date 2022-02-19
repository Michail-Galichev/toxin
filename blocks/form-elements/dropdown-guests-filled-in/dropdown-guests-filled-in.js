$(function(){   
  $('.dropdown-guests-filled-in__form').css({
    'display' : 'flex'
  });



  /*const $btnOpenClose = $('.dropdown-guests-filled-in__expand-more, .dropdown-guests-filled-in__input');
  const $dropdownGuests = $('.dropdown-guests-filled-in__form');
  const $guestInput = $('.dropdown-guests-filled-in__input'); */
  
  
  

/*открыть/закрыть dropdown */    
 
  /* $btnOpenClose.click(function () {
      let display = $dropdownGuests.css('display');
      $dropdownGuests.fadeToggle();
      if (display == 'none'){
        $guestInput.css({
              'border-bottom-left-radius' : '0px',
              'border-bottom-right-radius' : '0px'
             }); 
      } else $guestInput.css({'border-radius' : '4px'});
        
  });

  $('.dropdown-guests-filled-in__expand-more').click(function (){
    $guestInput.focus();
  })


  $(document).mouseup(function(e){
      if (! $btnOpenClose.is(e.target) &&
       $btnOpenClose.has(e.target).length === 0 && 
       ! $dropdownGuests.is(e.target) && $dropdownGuests.has(e.target).length === 0){
           $dropdownGuests.fadeOut();
           $guestInput.css({'border-radius' : '4px'});
       }
  })

 */

/*кнопка применить*/     
/* $('.dropdown__to-apply').click(function(){
      $dropdownGuests.hide();       
      $guestInput.css({'border-radius' : '4px'});
});

function counterGuests (){
  
  let countFirst = 0;
  let countAverage = 0;
  let countLast = 0;
  let sumGuests = 0;
  $('.js--count--first').val(0);
  $('.js--count--average').val(0);
  $('.js--count-last').val(0);
  
  
  
  
  
  


  $('.js--plus--first').click(function(){     
    countFirst++;
      
      $('.js--count--first').val(+countFirst);
      $('.js--minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js--minus--first').click(function(){     
      if (countFirst > 0){
      countFirst--;
      $('.js--count--first').val(+countFirst);
  } 
      if (countFirst === 0){
      $('.js--minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  $('.js--plus--average').click(function(){     
    countAverage++;
     $('.js--count--average').val(+countAverage);
      $('.js--minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js--minus--average').click(function(){     
      if (countAverage > 0){
        countAverage--;
      $('.js--count--average').val(+countAverage);
  } 
      if (countAverage === 0){
      $('.js--minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });

  $('.js--plus--last').click(function(){     
      countLast++;
      $('.js--count-last').val(+countLast);
      $('.js--minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.5)',
          'color' : 'rgba(31, 32, 65, 0.5)'});
  });

  $('.js--minus--last').click(function(){     
      if (countLast > 0){
          countLast--;
      $('.js--count--last').val(+countLast);
  } 
      if (countLast === 0){
      $('.js--minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'});
  }
  });
 */
  /* кнопка очистить*/   
/*   $('.dropdown__clear').click(function(){
      $(this).hide();
      $('.js--count--first').val(0);
      countFirst = 0;
      $('.js--count--average').val(0);
      countAverage = 0;
      $('.js--count--last').val(0);
      countLast = 0;
      $guestInput.attr('value', 'Сколько гостей').css({
        'color' : 'rgba(31, 32, 65, 0.25)'
    });
      $('.dropdown__to-apply').css({
        'margin-left' : '229px'
    });
      $('.js--minus--first,.js--minus--average,.js--minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'
    })
});

 $(`.js--minus--first,.js--minus--average,.js--minus--last,
 .js--plus--first,.js--plus--average,.js--plus--last`).click(function(){
  sumGuests = (+countFirst) + (+countAverage) + (+countLast);
  if (sumGuests === 0){
    $('.dropdown__clear').hide();
    $('.dropdown__to-apply').css({
      'margin-left' : '229px'
    });
    
  } else {
    $('.dropdown__clear').show();
    $('.dropdown__to-apply').css({
      'margin-left' : '143px'
    });
    $guestInput.css({
        'color' : 'rgba(31, 32, 65, 0.75)',
        'font-family' : 'Montserrat',
        'font-size' : '14px',
        'line-height' : '18px'        
    });
  }

    if (sumGuests === 1 ){
    $guestInput.attr('value', sumGuests + ' гость' );
  } else if(sumGuests > 1 && sumGuests < 5){
    $guestInput.attr('value', sumGuests + ' гостя' );
  } else if (sumGuests > 4){
    $guestInput.attr('value', sumGuests + ' гостей' );
  } else if (sumGuests === 0){
    $guestInput.attr('value', 'Сколько гостей' ).css({
        'color' : 'rgba(31, 32, 65, 0.5)'
    });
      $('.dropdown__clear').hide();
  }
});


  
}

counterGuests ();*/
  
   

});