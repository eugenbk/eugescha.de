// page elements
var imageBackground;
var imageBehind;
var coords;

$(document).ready(function() {
  imageBackground = $('#imageBackground');
  imageBehind = $('#imageBehind');
  coords = $('#coordContainer');

  // restoring scrolling position after page load
  var scrollPos = localStorage.getItem('scrollPos');
  if (scrollPos !== null) {
    $(window).scrollTop(scrollPos);
    localStorage.removeItem('scrollPos');
  }

  // store scrolling position when clicking on a thumbnail
  $('#thumbContainer a').click(function() {
    localStorage.setItem('scrollPos', $(window).scrollTop());
  });
});

$(window).scroll(function() {
  blurAndFadeOutBackground($(this).scrollTop());
});

// blur and fade-out background
var blurCoeff = 60; // in px from top of the screen. the greater the value, the longer will be effect at scrolling
var maxBlur = 6; // max blur coeff. no more blur at long scroll than this value
var minBrightness = 30; // 0 - dark, 100 - bright
function blurAndFadeOutBackground(scrollPos) {
  var brightness = 100 - ((100 - minBrightness) * scrollPos / imageBackground.height());
  var blur = scrollPos / blurCoeff;
  brightness = brightness < minBrightness ? minBrightness : brightness;
  blur = blur > maxBlur ? maxBlur : blur;
  imageBackground.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBackground.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
}