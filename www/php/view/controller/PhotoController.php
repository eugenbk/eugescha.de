<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/AppConfig.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/PhotoService.php");

$json = getPhotos();

require_once($_SERVER["DOCUMENT_ROOT"] . "/php/view/PhotoView.php");
?>