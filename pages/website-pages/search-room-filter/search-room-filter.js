$(function(){
  $('.js-mask-text-field__input')
  .css({
    'width' : '266px'
  });

  $('.js-guests-filled-in__input')
  .attr('placeholder', 'Сколько гостей')
  .css({
    'width' : '266px',
    'border' : '1px solid rgba(31, 32, 65, 0.25)',
    'border-radius' : '4px'
  });

  $('.js-guests-filled-in__expand-more')
  .css({
    'left' : '220px'
  });

  $('.js-room-card__form:not(:last)')
  .css({
    'margin-right' : '12px'
  });

  $('.js-room-card__luxury')
  .css({
    'margin-left' : '8px'
  });

  $('.js-filter__room-row:last')
  .css({
    'margin-bottom' : '0'
  });
  $('.js-dropdown-guests-filled-in__form')
  .css({
    'width' : '266px'
  });

  $('.js-dropdown__to-apply')
  .css({
    'left' : '173px'
  });

  $('.js-footer')
  .css({
    'border-top' : '1px solid rgba(31, 32, 65, 0.25)'
  });  

  

  function openCheckboxList(){
    const $checkboxList = $('.js-checkbox-list-advanced');
    const $openElementList = $('.js-checkbox-list-advanced__expand-more')
  
    $checkboxList.css({
    'display' : 'none'
  });

  $openElementList
  .css({
    'transform' : 'rotate(0deg)'
  });

  $openElementList.click(function(){
    let display = $checkboxList.css('display');
    $checkboxList.fadeToggle();
    if (display == 'none'){
      $openElementList
      .css({
        'transform' : 'rotate(180deg)'
      });
    } else {
      $openElementList
  .css({
    'transform' : 'rotate(0deg)'
  });
    }
  });

}

function openDropComfort(){
  const $openElemComfort = $('.js-drop-com-exp__input, .js-com__expand-more');
  const $dropdownComfort = $('.js-com-exp__form');
  const $inputDropComfort = $('.js-drop-com-exp__input'); 
  
  $dropdownComfort.css({
    'display' : 'none'
  });
  let clickOnOff = false;
  $openElemComfort.click(function(){
    clickOnOff = true;
    let display = $dropdownComfort.css('display');
    $dropdownComfort.fadeToggle();
    if (display == 'none'){
      $('.js-drop-com-exp__input').css({
        'border' : '1px solid rgba(31, 32, 65, 0.5)',
        'border-bottom-left-radius' : '0px',
        'border-bottom-right-radius' : '0px'
        
      });
    } else {
      clickOnOff = false;
      $inputDropComfort.css({
        'border' : '1px solid rgba(31, 32, 65, 0.25)'
        });
    }
  });

  $openElemComfort.hover(
    function(){
      $inputDropComfort.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
       });
    }, function(){
      if (clickOnOff == true){
        $inputDropComfort.css({
        'border': '1px solid rgba(31, 32, 65, 0.5)'
       });
      } else {  
        $inputDropComfort.css({
          'border': '1px solid rgba(31, 32, 65, 0.25)'
         });
      }  
    }
  );




  /*клик по странице*/

    $(document).mouseup(function(e){
      if (! $openElemComfort.is(e.target) &&
      $openElemComfort.has(e.target).length === 0 && 
      ! $dropdownComfort.is(e.target) && $dropdownComfort.has(e.target).length === 0){
        $dropdownComfort.fadeOut();
          $inputDropComfort.css({
            'border-radius' : '2px',
            'border': '1px solid rgba(31, 32, 65, 0.25)'
            });
     }
  });
}

  


function $counterComfort ($array, $elemComfort){ 
  if ($elemComfort === 1){
    return $elemAndDescription = $elemComfort + $array[0];
  }  else if ($elemComfort > 1 && $elemComfort < 5){
   return $elemAndDescription = $elemComfort + $array[1];
  } else if ($elemComfort >= 5){
  return $elemAndDescription = $elemComfort + $array[2];
  } else if ($elemComfort === 0){
    return $elemAndDescription = ''
  }
}  



 function $amenitiesCounter(){
  var $arrayBadRoom = [' спальня ', ' спальни ', ' спален '];
  var $arrayBad = [' кровать ', ' кровати ', ' кроватей '];
  var $arrayBathRoom = [' ванная комната', ' ванные комнаты', ' ванных комнат']
  var $inputDropComfort = $('.js-drop-com-exp__input')
  var $countFirst = 0;
  var $countAverage = 0;
  var $countLast = 0;
  var $inputFirst = $('.js-com-count--first');
  var $inputAverage = $('.js-com-count--average');
  var $inputLast = $('.js-com-count--last');
  $inputFirst.val(0);
  $inputAverage.val(0);
  $inputLast.val(0);
  $inputDropComfort.attr('placeholder', 'Выберите удобство')
  .css({
'font-family' : 'Montserrat',
'font-style' : 'normal',
'font-weight' : '400',
'font-size' : '14px',
'line-height' : '24px',
'color' : 'rgba(31, 32, 65, 0.5)',
'padding-right' : '70px',
'border' : '1px solid rgba(31, 32, 65, 0.25)'
})
.val('');
  $(document).click(function(e){
    var $elemTarget = $(e.target);
    var $elemTargetAtr = $elemTarget.attr("class");
    
    
    if ($elemTargetAtr.includes('js-com-plus--first')){
      $countFirst++;
      $inputFirst.val($countFirst);
      $('.js-com-minus--first').css({
        'border': '1px solid rgba(31, 32, 65, 0.5)',
        'color' : 'rgba(31, 32, 65, 0.5)'

      });
    } else if ($elemTargetAtr.includes('js-com-minus--first')){
      $countFirst--;
      $inputFirst.val($countFirst);
      if ($countFirst === 0){
        $inputFirst.val($countFirst);
        $('.js-com-minus--first').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'  
        });
      } else if ($countFirst < 0){
        $inputFirst.val(0);
        $countFirst=0;
      }  
    } else if ($elemTargetAtr.includes('js-com-plus--average')){
      $countAverage++;
      $inputAverage.val($countAverage);
      $('.js-com-minus--average').css({
        'border': '1px solid rgba(31, 32, 65, 0.5)',
        'color' : 'rgba(31, 32, 65, 0.5)'

      });
    } else if ($elemTargetAtr.includes('js-com-minus--average')){
      $countAverage--;
      $inputAverage.val($countAverage);
      if ($countAverage === 0){
        $inputAverage.val($countAverage);
        $('.js-com-minus--average').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'  
        });
      } else if ($countAverage < 0){
        $inputAverage.val(0);
        $countAverage=0;
      }  
    } else if ($elemTargetAtr.includes('js-com-plus--last')){
      $countLast++;
      $inputLast.val($countLast);
      $('.js-com-minus--last').css({
        'border': '1px solid rgba(31, 32, 65, 0.5)',
        'color' : 'rgba(31, 32, 65, 0.5)'

      });
    } else if ($elemTargetAtr.includes('js-com-minus--last')){
      $countLast--;
      $inputLast.val($countLast);
      if ($countLast === 0){
        $inputLast.val($countLast);
        $('.js-com-minus--last').css({
          'border': '1px solid rgba(31, 32, 65, 0.25)',
          'color' : 'rgba(31, 32, 65, 0.25)'  
        });
      } else if ($countLast < 0){
        $inputLast.val(0);
        $countLast=0;
      }  
    }
    $inputDropComfort.val($counterComfort ($arrayBadRoom, $countFirst) + 
    $counterComfort ($arrayBad, $countAverage) +
    $counterComfort ($arrayBathRoom, $countLast) );
  });

    
  
}


$amenitiesCounter();
openDropComfort();
openCheckboxList();
 

});