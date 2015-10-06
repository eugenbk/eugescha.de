<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/config.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/PhotoService.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/MetrikaService.php");

$thumbs = getThumbs();
$metrikaCode = getYandexMetrikaCode();

require_once($_SERVER["DOCUMENT_ROOT"] . "/php/view/IndexView.php");
?>