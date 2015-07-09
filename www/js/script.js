var blurCoeff = 60;
var minBrightness = 30;

$(document).ready(function() {
  $("a#what").click(function() {
    $("div#thumbnails").load("/php/view/thumbnails.php");
    window.history.pushState(null, null, "/");
    return false;
  });
  $("a#retro").click(function() {
    $("div#thumbnails").load("/php/view/thumbnails.php","sort=retro");
    window.history.pushState(null, null, "/retro/");
    return false;
  });
  $("a#geo").click(function() {
    $("div#thumbnails").load("/php/view/thumbnails.php","sort=geo");
    window.history.pushState(null, null, "/geo/");
    return false;
  });
  $("a#voice").click(function() {
    $("div#thumbnails").load("/php/view/thumbnails.php","sort=voice");
    window.history.pushState(null, null, "/voice/");
    return false;
  });
});

$(window).scroll(function() {
  var splashScreenBackground = $("div#splashScreenBackground");
  var splashScreenBehind = $("div#splashScreenBehind");
  var menu = $("ul#menu");

  var distanceScrolled = $(this).scrollTop();

  // blur and fade-out background
  var brightness = 100 - ((100 - minBrightness) * distanceScrolled / splashScreenBackground.height());
  splashScreenBackground.css("-webkit-filter", "blur(" + distanceScrolled / blurCoeff + "px)" + " " + "brightness(" + brightness + "%)");
  splashScreenBehind.css("-webkit-filter", "blur(" + distanceScrolled / blurCoeff + "px)" + " " + "brightness(" + brightness + "%)");

  // sticky menu
  var menuStartTopPos = $("div#stickyAnchor").offset().top;
  if (distanceScrolled > menuStartTopPos) {
    menu.addClass("stick");
    $("div#thumbnails").css('marginTop', menu.outerHeight());
  } else {
    menu.removeClass("stick");
    $("div#thumbnails").css('marginTop', 0);
  }
});

$(window).on("popstate", function() {
    // current href: document.location.pathname
    alert(document.location.pathname);
});