<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/config.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/dao/PhotoDAO.php");

function getThumbs() {
  global $config;

  $dbPhotos = getAllPhotos();

  foreach ($dbPhotos as $p) {
    $p->thumb_path = $config["thumbDir"] . $p->thumb_path;

    $thumbs[] = (object) array("id" => $p->id,
                               "thumb_path" => $p->thumb_path);
  }

  return $thumbs;
}

function getPhotos() {
  global $config;

  $dbPhotos = getAllPhotos();

  foreach ($dbPhotos as $p) {
    $p->photo_path = $config["photoDir"] . $p->photo_path;

    $photos[] = array("id" => $config["fotoramaIdPrefix"] . $p->id,
                      "img" => $p->photo_path);
  }

  $json = stripslashes(json_encode($photos));

  return $json;
}
?>