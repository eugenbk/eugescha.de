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
  
  $("#scrollDown").click(function () {
    destination = $('#thumbs').offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 200);
    return false;
  });
});

$(window).scroll(function() {
  var imageBackground = $('#imageBackground');
  var imageBehind = $('#imageBehind');
  var scrollDown = $('#scrollDown');
  var coords = $('#coord');

  var distanceScrolled = $(this).scrollTop();

  // blur and fade-out background
  var brightness = 100 - ((100 - minBrightness) * distanceScrolled / imageBackground.height());
  imageBackground.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('-webkit-filter', 'blur(' + distanceScrolled / blurCoeff + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  scrollDown.css('opacity', 1 - distanceScrolled / 50);
});