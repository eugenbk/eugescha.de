<?php
require_once("AppConfig.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/dao/PhotoDAO.php");

function getThumbs() {
  global $thumbDir;

  $dbPhotos = getAllPhotos();

  foreach ($dbPhotos as $p) {
    $p->thumb_path = $thumbDir . $p->thumb_path;

    $thumbs[] = (object) array("id" => $p->id,
                               "thumb_path" => $p->thumb_path,
                               "thumb_w" => $p->thumb_w,
                               "thumb_h" => $p->thumb_h);
  }

  return $thumbs;
}

function getPhotos() {
  global $photoDir, $fotoramaIdPrefix;

  $dbPhotos = getAllPhotos();

  foreach ($dbPhotos as $p) {
    $p->photo_path = $photoDir . $p->photo_path;

    $photos[] = array("id" => $fotoramaIdPrefix . $p->id, "img" => $p->photo_path);
  }

  $json = stripslashes(json_encode($photos));

  return $json;
}
?>