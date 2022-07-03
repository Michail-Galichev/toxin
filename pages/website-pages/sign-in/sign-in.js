$(function(){
  
 function $changeBackground (){ 
  var $backgrounds = [
    '/sign-in.d1f5679c.png',
    '/landing-page.1c9b862d.png',
    ]
    var $currentImage = 0;
    (function showNextImage() {
      var $backgroundBlock = $('.sign-in__background-wrapper');
      $backgroundBlock.css(
        'background-image', 'url(' + $backgrounds[$currentImage] + ')'
      );
      $currentImage += 1
      if ($currentImage >= $backgrounds.length) {
        $currentImage = 0
      }
      setTimeout(showNextImage, 5000)
    }())
 }
 $changeBackground ();
}); 