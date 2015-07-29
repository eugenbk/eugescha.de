<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/AppConfig.php");

function load($query) {
  $res = array();

  global $dbSrv, $dbUsr, $dbPwd, $dbName;

  mysql_connect($dbSrv, $dbUsr, $dbPwd) or die(mysql_error());
  mysql_select_db($dbName);

  $result = mysql_query($query);

  while ($obj = mysql_fetch_object($result)) {
    $res[] = $obj;
  }

  mysql_close();

  return $res;
}
?>