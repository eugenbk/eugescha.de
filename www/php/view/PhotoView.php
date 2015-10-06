<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>eugescha.de</title>
  <link rel="stylesheet" href="/css/fotorama.css">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/photo.css">
  <?php echo $metrikaCode ?>
  <script src="/js/jquery-2.1.4.min.js"></script>
  <script src="/js/fotorama.js"></script>
  <script src="/js/photo.js"></script>
  <script>
    var config = <?php echo $config_js ?>;
    var photos = <?php echo $json ?>;
    var startindex = urlIdToFotoramaId('<?php echo $_GET["id"] ?>');
    var lastindex = startindex;
  </script>
</head>
<body>
  <div id="fotorama" data-auto="false"></div>
  <div id="closePhoto" class="control">&#10007;</div>
  <div id="prevPhoto" class="control">&#9664;</div>
  <div id="nextPhoto" class="control">&#9654;</div>
</body>
</html>
