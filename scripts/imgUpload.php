<?php
$target_dir = "../imgs/";
$target_file = $target_dir.basename($_FILES["file"]["name"]);

$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// // Check if image file is a actual image or fake image
// if(isset($_POST["submit"])) {
//   $check = getimagesize($_FILES["imgUploader"]["tmp_name"]);
//   if($check !== false) {
//     //echo "File is an image - " . $check["mime"] . ".";
//     $uploadOk = 1;
//   } else {
//     //echo "File is not an image.";
//     $uploadOk = 0;
//   }
// }

// // Check if file already exists
// if (file_exists($target_file)) {
//   //echo "Sorry, file already exists.";
//   $uploadOk = 0;
// }

// // Check file size
// if ($_FILES["imgUploader"]["size"] > 500000) {
//   //echo "Sorry, your file is too large.";
//   $uploadOk = 0;
// }

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
  //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  //echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if(move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir . $_FILES["file"]["name"])) {

    //echo "The file ". basename( $_FILES["filer"]["name"]). " has been uploaded.";

    $lastImgTxtFile = fopen("../imgs/lastImgUploaded.txt","w");
    $lastImgPath    = basename($_FILES["file"]["name"]);
    fwrite($lastImgTxtFile, $lastImgPath);
    fclose($lastImgTxtFile);

  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}

?>