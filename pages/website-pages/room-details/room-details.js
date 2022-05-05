$(function(){
$('.js-arrival-date').attr('placeholder', '19.08.2019');
$('.js-departure-date').attr('placeholder', '23.08.2019');
$('.js-review-like--men .like__count--none-checked').text('12');
$('.js-form-wrapper .js-button__price')
.html('забронировать');
$('.js-header-wrapper .js-header__buttons')
  .css({
    'margin-top' : '2px'
  });
  $('.js-header-wrapper .js-header__logo')
  .css({
    'margin-top' : '16px'
  });

  function getLikeMen (){
    var $numOffClicks = 0;
    var $favorite = $('.js-review-like--men .like__favorite--none-checked') 
    var $count = $('.js-review-like--men .like__count--none-checked');
    var $border = $('.js-review-like--men .like--none-checked')
    var $countLikes = $count.text();
    $('.js-review-like--men').click(() => {
      $numOffClicks++;
      if($numOffClicks % 2 != 0){
        +($countLikes)++;
        $count.text($countLikes);
        $count.removeClass('like__count--none-checked').addClass('like__count--checked');
        $border.addClass('js-like--none-checked');
        $favorite.text('favorite')
        .removeClass('like__favorite--none-checked')
        .addClass('js-favorite');
      } else {
        $count.removeClass('like__count--checked').addClass('like__count--none-checked');
        $countLikes = $countLikes - 1;
        $count.text($countLikes);
        $border.removeClass('js-like--none-checked');
        $favorite.text('')
        .removeClass('js-favorite')
        .addClass('like__favorite--none-checked');
      }
    });
    
}    
  getLikeMen ();
  
  function getLikeWomen (){
    var $numOffClicks = 0;
    var $favorite = $('.js-review-like--women .like__favorite--none-checked') 
    var $count = $('.js-review-like--women .like__count--none-checked');
    var $border = $('.js-review-like--women .like--none-checked')
    var $countLikes = $count.text();
    $('.js-review-like--women').click(() => {
      $numOffClicks++;
      if($numOffClicks % 2 != 0){
        +($countLikes)++;
        $count.text($countLikes);
        $count.removeClass('like__count--none-checked').addClass('like__count--checked');
        $border.addClass('js-like--none-checked');
        $favorite.text('favorite')
        .removeClass('like__favorite--none-checked')
        .addClass('js-favorite');
      } else {
        $count.removeClass('like__count--checked').addClass('like__count--none-checked');
        $countLikes = $countLikes - 1;
        $count.text($countLikes);
        $border.removeClass('js-like--none-checked');
        $favorite.text('')
        .removeClass('js-favorite')
        .addClass('like__favorite--none-checked');
      }
    });
    
}    
  getLikeWomen ();



});