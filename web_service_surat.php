<?php
 REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn, "Select s.ID_Surat , s.Ket_Surat , s.ID_Penduduk , p.Nama_Penduduk , a.Nama_Admin from surat s JOIN penduduk p ON s.ID_Penduduk=p.ID_Penduduk JOIN admin a ON s.ID_Admin=a.ID_Admin");
$row = MYSQLI_FETCH_ASSOC($QUERY);
foreach ($QUERY as $value) {
	$surat = new stdClass;

$surat-> ID_Surat = $value['ID_Surat'];
$surat-> Ket_Surat = $value['Ket_Surat'];
$surat-> ID_Penduduk = $value['ID_Penduduk'];
$surat-> Nama_Penduduk = $value['Nama_Penduduk'];
$surat-> Nama_Admin = $value['Nama_Admin'];


$data[]=$surat;
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE($data);
MYSQLI_CLOSE($conn);
?>
