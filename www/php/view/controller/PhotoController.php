<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/config.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/PhotoService.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/MetrikaService.php");

$json = getPhotos();
$metrikaCode = getYandexMetrikaCode();

require_once($_SERVER["DOCUMENT_ROOT"] . "/php/view/PhotoView.php");
?>