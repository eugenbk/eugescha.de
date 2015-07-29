var blurCoeff = 60;
var minBrightness = 30;

$(document).ready(function() {
  var scrollPos = localStorage.getItem('scrollPos');
  if (scrollPos !== null) {
    $(window).scrollTop(scrollPos);
    localStorage.removeItem('scrollPos');
  }


  $('#thumbs a').click(function() {
    localStorage.setItem('scrollPos', $(window).scrollTop());
  });
});

$(window).scroll(function() {
  var imageBackground = $('#imageBackground');
  var imageBehind = $('#imageBehind');

  var distanceScrolled = $(this).scrollTop();

  // blur and fade-out background
  var brightness = 100 - ((100 - minBrightness) * distanceScrolled / imageBackground.height());
  imageBackground.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
});