$( function() {
  $( ".js--range-slider__body" ).slider({
    classes:{ 
      'ui-slider-horizontal' : 'js--range-slider__guide',
      'ui-slider-range' : 'js--range-slider__illumination',
      'ui-slider-handle' : 'js--range-slider__circle'
      
    },
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( ".js--amount" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + '₽' );
    }
  });
  $( ".js--amount" ).val($( ".js--range-slider__body" ).slider( "values", 0 ) + "₽" +
  " - " + $( ".js--range-slider__body" ).slider( "values", 1 ) + "₽" );
});    