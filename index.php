<!-- 
	Projekt: SCMS (Simple Content Managment System)
	Licencja: Creative Commons
	Autor: Mikołaj Kaźmierczak
-->
<!DOCTYPE html>
<html>
	<head>
		<?php include "scms/head.php";?>
	</head>

 	<body>
		<?php include "scms/menu.php";?>

		<main class="c-main">
			<?php include "scms/header.php";?>
			<?php include "scms/editor.php";?>

			<!-- action="scripts/imgUpload.php" -->
			<!-- added 2 -->
			<form id="gr" method="post" enctype="multipart/form-data">
				<input id="fileToUpload" name="imgUploader" type="file">
				<input name="submit" type="submit" value="Potwierdź">
			</form>	
			<script>
				$(document).ready(function(){

				});
			</script>

		</main>
	</body>
</html>