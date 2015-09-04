<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/config.php");

function load($query) {
  $res = array();

  global $config;

  mysql_connect($config["dbSrv"], $config["dbUsr"], $config["dbPwd"]) or die(mysql_error());
  mysql_select_db($config["dbName"]);

  $result = mysql_query($query);

  while ($obj = mysql_fetch_object($result)) {
    $res[] = $obj;
  }

  mysql_close();

  return $res;
}
?>