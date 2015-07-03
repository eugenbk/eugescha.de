var blurCoeff = 60;
var minBrightness = 30;

$(window).scroll(function(e) {
  var splashScreenBackground = $('#splashScreenBackground');
  var splashScreenBehind = $('#splashScreenBehind');

  var distanceScrolled = $(this).scrollTop();
  var brightness = 100 - ((100 - minBrightness) * distanceScrolled / splashScreenBackground.height());

  splashScreenBackground.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  splashScreenBehind.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  });