<?php
require_once("config.php");

function load($query) {
  $res = array();

  global $db_server, $db_user, $db_password, $db_name;

  mysql_connect($db_server, $db_user, $db_password) or die(mysql_error());
  mysql_select_db($db_name);

  $result = mysql_query($query);

  while ($obj = mysql_fetch_object($result)) {
    $res[] = $obj;
  }

  mysql_close();

  return $res;
}
?>