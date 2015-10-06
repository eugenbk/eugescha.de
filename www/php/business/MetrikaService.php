<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/config.php");

function getYandexMetrikaCode() {
  global $config;

  if ($config["env"] == "live") {
    return file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/php/view/YandexMetrika.txt") . "\n";
  } else {
    return "";
  }
}
?>