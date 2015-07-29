<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/dao/GenericDAO.php");

function getAllPhotos() {
  $query = "SELECT * FROM T_Photo ORDER BY upload_date DESC";
  $photos = load($query);
  return $photos;
}
?>