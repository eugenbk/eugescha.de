<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>eugescha.de</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/index.css">
  <?php echo $metrikaCode ?>
  <script src="/js/jquery-2.1.4.min.js"></script>
  <script src="/js/jquery-ui.min.js"></script>
  <script src="/js/jquery.waitforimages.min.js"></script>
  <script src="/js/index.js"></script>
</head>
<body>
  <div id="splashScreenContainer" class="slide100">
    <div id="imageBackground" class="imageBackground_blurred"></div>
    <div id="imageBehind" class="imageBackground"></div>
    <div id="coordContainer">
      <a href="https://www.here.com/?map=48.13373,11.59471,19&amp;x=ep">48°08'01.4"N</a><br/>
      <a href="https://www.here.com/?map=48.13373,11.59471,19&amp;x=ep">11°35'40.9"E</a>
    </div>
  </div>
  <div class="slide100"></div> <!-- place holder for splashScreenContainer (fake container) -->
  <div id="thumbContainer" class="slide">
    <?php
      foreach ($thumbs as $t) {
        ?><a href="<?php echo $config["photoDir"] ?><?php echo $t->id ?>/"><img class="thumb" src="<?php echo $t->thumb_path ?>"></a><?php
      }
    ?>
  </div>
  <div id="blackSpaceContainer" class="slide100"></div>
  <div id="usContainer" class="slide">
    <img id="usImg" src="/img/us.jpg">
  </div>
</body>
</html>
