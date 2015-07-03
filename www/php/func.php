<?php
require_once("config.php");

function getThumbs() {
  $thumbs = array();

  global $db_server, $db_user, $db_password, $db_name;

  mysql_connect($db_server, $db_user, $db_password) or die(mysql_error());
  mysql_select_db($db_name);

  $query = "SELECT * FROM T_Photo";
  $result = mysql_query($query);

  while ($row = mysql_fetch_object($result)) {
    $thumbs[] = $row -> thumbnail_path;
  }

  mysql_close();

  return $thumbs;
}
?>