$(document).ready(function(){
  $(document).on('mouseenter', function () {
    $('.control').toggleClass('controlVisible');
  });

  $(document).on('mouseleave', function () {
    $('.control').toggleClass('controlVisible');
  });

  var i = null;
  $(document).mousemove(function() {
    clearTimeout(i);
    $('.control').addClass('controlVisible');
    i = setTimeout('$(".control").removeClass("controlVisible");', 3000);
  }).mouseleave(function() {
    clearTimeout(i);
    $('.control').removeClass('controlVisible');
  });
});