<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>eugescha.de</title>
  <link rel="stylesheet" href="css\style.css">
  <script src="js\jquery-2.1.4.min.js"></script>
  <script src="js\script.js"></script>
</head>
<body>
  <div id="splashScreenBehind"></div>
  <div id="splashScreenBackground"></div>
  <div id="thumbnailsArea">
    <div id="stickyAnchor"></div>
    <ul id="menu">
      <li><a id="what" href="/">Чо-кого</a></li>
      <li><a id="retro" href="/retro">Ретроспектива</a></li>
      <li><a id="geo" href="/geo">География</a></li>
      <li><a id="voice" href="/voice">Голос публики</a></li>
      <li><a id="authors" href="/authors">Авторы</a></li>
    </ul>
    <div id="thumbnails">
      <?php require_once("/php/view/thumbnails.php"); ?>
    </div>
  </div>
</body>
</html>
