<?php
REQUIRE_ONCE('koneksi.php'); 
$idp=$_POST['idpenduduk'];
$ida=$_POST['idadmin'];
$ids=$_POST['idsurat'];
$ket=$_POST['ketsurat'];
$QUERY = MYSQLI_QUERY($conn, "INSERT INTO surat VALUES('$ids','$idp','$ida','$ket')"); 
echo 'a',$ida;
?>