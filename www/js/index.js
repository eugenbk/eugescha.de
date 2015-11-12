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
var minBrightness = 0.3; // 0 - dark, 1 - bright
function blurAndFadeOutBackground(scrollPos) {
  var startDissapearancePos = $('#thumbContainer').offset().top; // and end of fade-out position
  var endDissapearancePos = $('#blackSpaceContainer').offset().top;

  if (scrollPos <= startDissapearancePos) { // fade out
    var scrolledRatio = scrollPos / startDissapearancePos;
    imageBehind.css('opacity', 1 - scrolledRatio);
    imageBackground.css('opacity', 1 - (1 - minBrightness) * scrolledRatio);
    coords.css('opacity', 1 - scrolledRatio);
  } else if (scrollPos > startDissapearancePos && scrollPos <= endDissapearancePos) { // disappearing
    imageBehind.css('opacity', 0);
    imageBackground.css('opacity', minBrightness - (scrollPos - startDissapearancePos) / (endDissapearancePos - startDissapearancePos) * minBrightness);
    coords.css('opacity', 0);
  } else { // black background
    imageBehind.css('opacity', 0);
    imageBackground.css('opacity', 0);
    coords.css('opacity', 0);
  }
}