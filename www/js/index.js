// page elements
var imageBackground;
var imageBehind;
var coords;

var blurAndFadeOutBackground;

$(document).ready(function() {
  imageBackground = $('#imageBackground');
  imageBehind = $('#imageBehind');
  coords = $('#coordContainer');

  if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true)) { // is IE?
    imageBackground.addClass('imageBackground_blurred');
    blurAndFadeOutBackground = blurAndFadeOutBackgroundIe;
  } else {
    imageBackground.addClass('imageBackground');
    blurAndFadeOutBackground = blurAndFadeOutBackgroundOtherBrowser;
  }

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
var minBrightnessIe = minBrightness / 100; // brightness is controlled with opacity, that is why 0.3
function blurAndFadeOutBackgroundIe(scrollPos) {
  var blur = scrollPos / blurCoeff;
  blur = blur > maxBlur ? maxBlur : blur;
  var opacity = 1 - scrollPos / (blurCoeff * maxBlur); // 360 px to get the blurred image completely visible (blur coeff. 6)
  var brightness = 1 - (1 - minBrightnessIe) * scrollPos / imageBackground.height();
  brightness = brightness < minBrightnessIe ? minBrightnessIe : brightness;
  imageBackground.css('opacity', brightness);
  imageBehind.css('opacity', opacity);
  coords.css('opacity', brightness);
  if (scrollPos > 0) {
    $('#coordContainer a').css('opacity', '.6');
    $('#coordContainer a').css('border-bottom-color', 'transparent');
    $('#coordContainer a').css('text-shadow', '0 0 ' + blur * 2 + 'px');
    $('#coordContainer a').css('box-shadow', '0 4px ' + blur + 'px -3px');
  } else {
    $('#coordContainer a').removeAttr('style');
  }
}
function blurAndFadeOutBackgroundOtherBrowser(scrollPos) {
  var blur = scrollPos / blurCoeff;
  blur = blur > maxBlur ? maxBlur : blur;
  var brightness = 100 - (100 - minBrightness) * scrollPos / imageBackground.height();
  brightness = brightness < minBrightness ? minBrightness : brightness;
  imageBackground.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBackground.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
}