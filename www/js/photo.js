var fotorama;

$(document).ready(function(){
  $('#fotorama').on('fotorama:showend', function (e, fotorama, extra) {
    var newindex = fotorama.activeFrame.id;
    if (newindex != lastindex) {
      history.pushState(null, null, '/photo/' + fotoramaIdToUrlId(newindex) + '/');
      lastindex = newindex;
    }
  });

  $('#fotorama').on('mouseleave', function () {
    $('#closePhoto').toggle("slide", { direction: "left" }, 1000);
  });

  fotorama = $('#fotorama').fotorama({
    data: photos,
    width: '100%',
    height: '100%',
    nav: false,
    startindex: startindex
  }).data('fotorama');
});

$(window).on("popstate", function(e) {
  var found = location.href.match(/.+\/photo\/(\d+)\//i);
  if (found != -1) {
    var urlId = found[1];
    var newindex = urlIdToFotoramaId(urlId);
    fotorama.show(newindex);
    lastindex = newindex;
  }
});

function fotoramaIdToUrlId(fotoramaId) {
  return fotoramaId.substring(fotoramaIdPrefix.length);
}

function urlIdToFotoramaId(urlId) {
  return fotoramaIdPrefix + urlId;
}