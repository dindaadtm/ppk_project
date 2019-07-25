<?php
 REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn, "SELECT * FROM penduduk");
$row = MYSQLI_FETCH_ASSOC($QUERY);
foreach ($QUERY as $value) {
	$penduduk = new stdClass;

$penduduk-> ID_Penduduk = $value['ID_Penduduk'];
$penduduk-> Nama_Penduduk = $value['Nama_Penduduk'];
$penduduk-> Alamat = $value['Alamat'];
$penduduk-> No_HP = $value['No_HP'];
$penduduk-> Jenis_Kelamin = $value['Jenis_Kelamin'];
$penduduk-> Gaji = $value['Gaji'];

$data[]=$penduduk;
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE($data);
MYSQLI_CLOSE($conn);
?>
