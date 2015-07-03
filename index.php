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
  <div id="headingBehind"></div>
  <div id="headingBackground"></div>
  <div id="content">
    <ul id="menu">
      <li>Ретроспектива</li>
      <li>География</li>
      <li>Голос публики</li>
    </ul>
    <?php
$server = "127.0.0.1";
$user = "root";
$password = "";
$db = "eugescha_db";
mysql_connect($server, $user, $password) or die(mysql_error());
mysql_select_db($db);
$query = "SELECT * FROM T_Photo";
$result = mysql_query($query);
while($r=mysql_fetch_array($result)) {
  ?>
<img src="thumbnails\<?php echo $r[thumbnail_path] ?>">
  <?php
}
mysql_close();
?>
  </div>
</body>
</html>
