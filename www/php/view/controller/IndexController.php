<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/config.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/PhotoService.php");

$thumbs = getThumbs();

require_once($_SERVER["DOCUMENT_ROOT"] . "/php/view/IndexView.php");
?>