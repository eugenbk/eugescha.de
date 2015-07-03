<?php require_once("php/func.php"); ?>
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
  <div id="thumbArea">
    <ul id="menu">
      <li>Ретроспектива</li>
      <li>География</li>
      <li>Голос публики</li>
    </ul>
    <?php
      $thumbs = getThumbs();
      foreach ($thumbs as $thumb) {
      ?>
        <img src="thumbnails\<?php echo $thumb ?>">
      <?php
      }
    ?>
  </div>
</body>
</html>
