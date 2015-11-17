var fotorama;

$(document).ready(function(){
  var prevPhoto = $('#prevPhoto');
  var nextPhoto = $('#nextPhoto');
  var caption = $('#caption');

  // fotorama: it is recommended to start listening to the events before initialization
  $('#fotorama').on('fotorama:show', function (e, fotorama) {
    // displaying caption
    if (fotorama.activeFrame.caption) {
      caption.show();
      if (fotorama.activeFrame.url) {
        caption.html('<a href="' + fotorama.activeFrame.url + '">' + fotorama.activeFrame.caption + '</a>');
      } else {
        caption.text(fotorama.activeFrame.caption);
      }
    } else {
      caption.hide();
    }
    // hiding prev photo arrow for the first photo
    if (fotorama.activeIndex == 0) {
      prevPhoto.hide();
    } else {
      prevPhoto.show();
    }
    // hiding next photo arrow for the last photo
    if (fotorama.activeIndex == fotorama.size - 1) {
      nextPhoto.hide();
    } else {
      nextPhoto.show();
    }
  });
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
    startindex: startindex,
    captions: false,
    keyboard: true
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

  // hiding disappearing elements when no mouse moving
  var timeout = 3000; // 3 sec
  var id = null;
  $(document).mousemove(function() {
    clearTimeout(id);
    $('.disappearingElement').addClass('disappearingElement_visible');
    id = setTimeout('$(".disappearingElement").removeClass("disappearingElement_visible");', timeout);
  });

  // displaying and hiding disappearings elements when entering and leaving browser window by the cursor
  $(document).on('mouseenter', function () {
    $('.disappearingElement').toggleClass('disappearingElement_visible');
  });
  $(document).on('mouseleave', function () {
    clearTimeout(id);
    $('.disappearingElement').toggleClass('disappearingElement_visible');
  });

  // handling browser 'back' button
  var re = new RegExp('/.+' + config['photoDir'] + '(\\d+)/', 'i');
  $(window).on('popstate', function(e) {
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