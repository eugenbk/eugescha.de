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
  <a id="coord" href="https://www.here.com/?map=48.13373,11.59471,19">48°08'01.4"N</br>11°35'40.9"E</a>
  <div id="scrollDown">&#x25bc;</div>
  <div id="thumbs">
    <?php
      foreach ($thumbs as $t) {
        ?><a href="/photo/<?php echo $t->id ?>/"><img class="thumb" src="<?php echo $t->thumb_path ?>"></a><?php
      }
    ?>
  </div>
</body>
</html>
