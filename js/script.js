$(window).scroll(function(e) {
  var distanceScrolled = $(this).scrollTop();
  var i = 100 - (70*$(this).scrollTop()/$('#headingBackground').height());
  $('#headingBackground').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)' + ' ' + 'brightness('+i+'%)');
    $('#headingBehind').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)' + ' ' + 'brightness('+i+'%)');
  //$('#headingBehind').css('-webkit-filter', 'brightness('+i+'%)');
  });