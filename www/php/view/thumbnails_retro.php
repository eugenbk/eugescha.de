<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/php/business/thumbnail_service.php");

$thumbs = getThumbsByPhotoDate();

foreach ($thumbs as $thumb) {
?>
  <img src="/thumbnails/<?php echo $thumb->thumbnail_path ?>" width="<?php echo $thumb->thumbnail_width ?>" height="<?php echo $thumb->thumbnail_height ?>">
<?php
}
?>