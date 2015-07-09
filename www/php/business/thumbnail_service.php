<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/dao/dao.php");

function getThumbsByUploadDate() {
  $query = "SELECT thumbnail_path, thumbnail_width, thumbnail_height FROM T_Photo ORDER BY upload_date DESC";
  $thumbs = load($query);
  return $thumbs;
}

function getThumbsByPhotoDate() {
  $query = "SELECT thumbnail_path, thumbnail_width, thumbnail_height FROM T_Photo ORDER BY photo_date ASC";
  $thumbs = load($query);
  return $thumbs;
}
?>