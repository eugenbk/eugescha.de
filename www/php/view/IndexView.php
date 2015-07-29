<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>eugescha.de</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/index.css">
  <script src="/js/jquery-2.1.4.min.js"></script>
  <script src="/js/index.js"></script>
</head>
<body>
  <div id="imageBehind"></div>
  <div id="imageBackground"></div>
  <div id="thumbs">
    <?php
      foreach ($thumbs as $t) {
        ?><a href="/photo/<?php echo $t->id ?>/"><img class="thumb" src="<?php echo $t->thumb_path ?>"></a><?php
      }
    ?>
  </div>
</body>
</html>
