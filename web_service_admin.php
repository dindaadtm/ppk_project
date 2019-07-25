<?php
 REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn, "SELECT * FROM admin");
$row = MYSQLI_FETCH_ASSOC($QUERY);
foreach ($QUERY as $value) {
	$admin = new stdClass;

$admin-> ID_Admin = $value['ID_Admin'];
$admin-> Nama_Admin = $value['Nama_Admin'];

$data[]=$admin;
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE($data);
MYSQLI_CLOSE($conn);
?>
