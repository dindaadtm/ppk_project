<?php 

include 'koneksi.php';
$id=$_POST['id'];
$nama=$_POST['nama'];
$alamat=$_POST['alamat'];
$no=$_POST['no'];
$jk=$_POST['jk'];
$gaji=$_POST['gaji'];
//$QUERY = MYSQLI_QUERY($conn, "INSERT INTO penduduk VALUES('$id','$nama','$alamat','$no','$jk','$gaji')"); 
mysqli_query($conn ,"UPDATE penduduk SET Nama_Penduduk='$nama', Alamat='$alamat',
	No_HP='$no', Jenis_Kelamin='$jk', Gaji='$gaji' WHERE ID_Penduduk='$id'");
?>
