<?php
REQUIRE_ONCE('koneksi.php'); 
$id=$_POST['id'];
$QUERY = MYSQLI_QUERY($conn, "DELETE FROM penduduk WHERE ID_Penduduk=$id"); 
echo "string";
?>