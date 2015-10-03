var fotorama;

$(document).ready(function(){
  // fotorama: it is recommended to start listening to the events before initialization
  $('#fotorama').on('fotorama:showend', function (e, fotorama, extra) {
    var newindex = fotorama.activeFrame.id;
    if (newindex != lastindex) {
      history.pushState(null, null, config['photoDir'] + fotoramaIdToUrlId(newindex) + '/');
      lastindex = newindex;
    }
  });

  fotorama = $('#fotorama').fotorama({
    data: photos,
    width: '100%',
    height: '100%',
    nav: false,
    arrows: false,
    startindex: startindex
  }).data('fotorama');

  $('#closePhoto').click(function() {
    window.location.href = '/';
  });
  $('#prevPhoto').click(function() {
    fotorama.show('<');
  });
  $('#nextPhoto').click(function() {
    fotorama.show('>');
  });

  // hiding control elements when no mouse moving
  var timeout = 3000; // 3 sec
  var id = null;
  $(document).mousemove(function() {
    clearTimeout(id);
    $('.control').addClass('controlVisible');
    id = setTimeout('$(".control").removeClass("controlVisible");', timeout);
  });

  // displaying and hiding control elements when entering and leaving browser window by the cursor
  $(document).on('mouseenter', function () {
    $('.control').toggleClass('controlVisible');
  });
  $(document).on('mouseleave', function () {
    clearTimeout(id);
    $('.control').toggleClass('controlVisible');
  });

  // handling browser 'back' button
  var re = new RegExp('/.+' + config['photoDir'] + '(\\d+)/', 'i');
  $(window).on("popstate", function(e) {
    var found = location.href.match(re);
    if (found != -1) {
      var urlId = found[1];
      var newindex = urlIdToFotoramaId(urlId);
      fotorama.show(newindex);
      lastindex = newindex;
    }
  });
});

function fotoramaIdToUrlId(fotoramaId) {
  return fotoramaId.substring(config['fotoramaIdPrefix'].length);
}

function urlIdToFotoramaId(urlId) {
  return config['fotoramaIdPrefix'] + urlId;
}