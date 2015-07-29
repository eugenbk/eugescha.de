<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>eugescha.de</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/photo.css">
  <link rel="stylesheet" href="/css/fotorama.css">
  <script src="/js/jquery-2.1.4.min.js"></script>
  <script src="/js/fotorama.js"></script>
  <script src="/js/photo.js"></script>
  <script>
    var fotoramaIdPrefix = '<?php echo $fotoramaIdPrefix ?>';
    var photos = <?php echo $json ?>;
    var startindex = urlIdToFotoramaId('<?php echo $_GET["id"] ?>');
    var lastindex = startindex;
  </script>
</head>
<body>
  <div id="fotorama" data-auto="false"></div>
  <a id="closePhoto" href="/">X</a>
</body>
</html>
