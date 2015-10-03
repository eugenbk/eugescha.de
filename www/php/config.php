<?php
$config = parse_ini_file($_SERVER["DOCUMENT_ROOT"] . "/conf/conf.ini");
$config_js = stripslashes(json_encode($config));
?>