<?php
$html = $_POST["value"];
//$html = "sfasfwa";

$uploadOk = 1;

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  //echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  $page = fopen("../pages/page1.php","w");
  fwrite($page, $html);
  fclose($page);
}

?>