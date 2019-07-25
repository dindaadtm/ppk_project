<?php
REQUIRE_ONCE('koneksi.php'); 
$id=$_POST['id'];
$nama=$_POST['nama'];
$alamat=$_POST['alamat'];
$no=$_POST['no'];
$jk=$_POST['jk'];
$gaji=$_POST['gaji'];
$QUERY = MYSQLI_QUERY($conn, "INSERT INTO penduduk VALUES('$id','$nama','$alamat','$no','$jk','$gaji')"); 
echo "string";
?>