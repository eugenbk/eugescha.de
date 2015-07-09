<?php
switch ($_REQUEST["sort"]) {
  case "":
    require_once("thumbnails_what.php");
    break;
  case "retro":
    require_once("thumbnails_retro.php");
    break;
  case "geo":
    require_once("thumbnails_geo.php");
    break;
  case "voice":
    require_once("thumbnails_voice.php");
    break;
}