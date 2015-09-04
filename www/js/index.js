var blurCoeff = 60;
var minBrightness = 30;

$(document).ready(function() {
  var scrollPos = localStorage.getItem('scrollPos');

  if (scrollPos !== null) {
    $(window).scrollTop(scrollPos);
    localStorage.removeItem('scrollPos');
  }

  $('#thumbContainer a').click(function() {
    localStorage.setItem('scrollPos', $(window).scrollTop());
  });
  
  $("#scrollDown").click(function () {
    destination = $('#thumbContainer').offset().top;
    $("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 400);
    return false;
  });
});

$(window).scroll(function() {
  var imageBackground = $('#imageBackground');
  var imageBehind = $('#imageBehind');
  var scrollDown = $('#scrollDown');
  var coords = $('#coordContainer');

  var distanceScrolled = $(this).scrollTop();

  // blur and fade-out background
  var brightness = 100 - ((100 - minBrightness) * distanceScrolled / imageBackground.height());
  var blur = distanceScrolled / blurCoeff;
  brightness = brightness < 30 ? 30 : brightness;
  blur = blur > 6 ? 6 : blur;
  imageBackground.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('-webkit-filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBackground.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  imageBehind.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  coords.css('filter', 'blur(' + blur + 'px)' + ' ' + 'brightness(' + brightness + '%)');
  scrollDown.css('opacity', 1 - distanceScrolled / 50);
  /*imageBehind.css('opacity', 1 - distanceScrolled / (imageBackground.height() / 2));
  imageBackground.css('opacity', 10 / brightness);
  coords.css('opacity', 10 / brightness);*/
});