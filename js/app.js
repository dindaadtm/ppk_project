var Application = {
	initApplication: function () {
		$(document).load('pageinit', '#page-one', function () {
			Application.initShowMhs();
		})

		$(document).on('click', '#detail-mhs', function () {
			var id_penduduk = $(this).data('id');
			Application.initShowDetailMhs(id_penduduk);
		})
		$(document).on('click', '#buttonSend', function () {
			var id = $("#idpenduduk").val();
			var nama = $("#namapenduduk").val();
			var alamat = $("#alamat").val();
			var no = $("#no").val();
			var jk = $("#jk").val();
			var gaji = $("#gaji").val();
			/*									window.alert(nama+" Sukses Ditambahkan");
			 */
			Application.postMessage(id, nama, alamat, no, jk, gaji);
		})
		$(document).on('click', '#buttonSurat', function () {
			var idpenduduk = $("#id_penduduk").val();
			var idadmin = $("#idadmin").val();
			var idsurat = $("#idsurat").val();
			var ketsurat = $("#ketsurat").val();


			Application.addSurat(idpenduduk, idadmin, idsurat, ketsurat);
		})
		$(document).on('click', '#buttonUpdate', function () {
			var id = $("#idPend").val();
			var nama = $("#namaPend").val();
			var alamat = $("#alamatPend").val();
			var no = $("#noPend").val();
			var jk = $("#jkPend").val();
			var gaji = $("#gajiPend").val();
			window.alert(id + " " + nama + " " + alamat + " " + no + " " + jk + " " + gaji);
			Application.update(id, nama, alamat, no, jk, gaji);
		})
		$(document).on('click', '#buttonDelete', function () {
			var id = $("#id").val();
			Application.deletePenduduk(id);

		})
		$(document).load('pageinit', '#page-admin', function () {
			Application.initShowAdmin();
		})
		$(document).load('pageinit', '#page-delete', function () {
			Application.initShowPdd();
		})
		$(document).load('pageinit', '#page-surat', function () {
			Application.initShowListPenduduk();
			Application.initShowListAdmin();


		})
		$(document).on('click', '#detail-listpdd', function () {

			var id_penduduk = $(this).data('id');
			Application.initShowDetailListPdd(id_penduduk);
		})
		$(document).on('click', '#detail-listadmin', function () {
			var id_admin = $(this).data('id');
			Application.initShowDetailListAdmin(id_admin);
		})

		$(document).load('pageinit', '#page-tampilsurat', function () {
			Application.initShowSurat();
		})
	},
	initShowMhs: function () {
		$.ajax({
			url: 'http://localhost/ppk2/web_service.php',
			type: 'get',
			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					var appendList = '<li class="ui-btn ui-corner-all"><a href="#page-two?id=' + dataObject[i].ID_Penduduk +
						'" target="_self" id="detail-mhs" data-id="' + dataObject[i].ID_Penduduk + '"><h2>' + dataObject[i].Nama_Penduduk +
						'</h2><p>Alamat : ' + dataObject[i].Alamat + '</p></a></li>';
					$('#list-villager').append(appendList);
				}
				$('#list-villager').listview('refresh');
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},

	initShowDetailMhs: function (id_penduduk) {
		$.ajax({
			url: 'http://localhost/ppk2/web_service.php',
			type: 'get',
			success: function (dataObject) {
				$('#p-id,#p-nama,#p-alamat,#p-nohp,#p-jk,#p-gaji').empty();
				for (var i = 0; i < dataObject.length; i++) {
					if (dataObject[i].ID_Penduduk == id_penduduk) {
						$('#p-id').append('<p>ID Penduduk</p><input type="text" name="id" id="idPend" placeholder="' + dataObject[i].ID_Penduduk + '" value="' + dataObject[i].ID_Penduduk + '">');
						$('#p-nama').append('<p>Nama Penduduk</p><input type="text" name="nama" id="namaPend" placeholder="' + dataObject[i].Nama_Penduduk + '" value="' + dataObject[i].Nama_Penduduk + '">');
						$('#p-alamat').append('<p>Alamat Penduduk</p><input type="text" name="alamat" id="alamatPend" placeholder="' + dataObject[i].Alamat + '" value="' + dataObject[i].Alamat + '">');
						$('#p-nohp').append('<p>No HP</p><input type="text" id="noPend" name="no" placeholder="' + dataObject[i].No_HP + '" value="' + dataObject[i].No_HP + '">');
						$('#p-jk').append('<p>Jenis Kelamin</p><input type="text" name="jk" id="jkPend" placeholder="' + dataObject[i].Jenis_Kelamin + '" value="' + dataObject[i].Jenis_Kelamin + '">');
						$('#p-gaji').append('<p>Gaji</p><input type="text" name="gaji" id="gajiPend" placeholder="' + dataObject[i].Gaji + '" value="' + dataObject[i].Gaji + '">');

					};
				};
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},

	postMessage: function (id, nama, alamat, no, jk, gaji) {
		$.ajax({
			type: "POST",
			url: 'http://localhost/ppk2/web_service_input.php',
			data: {
				id: id,
				nama: nama,
				alamat: alamat,
				no: no,
				jk: jk,
				gaji: gaji
			},
			success: function (data) {
				window.alert(nama + " Sukses Ditambahkan");
				window.location.href = "#page-one";
				location.reload();
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},

	update: function (id, nama, alamat, no, jk, gaji) {
		$.ajax({
			type: "POST",
			url: 'http://localhost/ppk2/web_service_update.php',
			data: {
				id: id,
				nama: nama,
				alamat: alamat,
				no: no,
				jk: jk,
				gaji: gaji
			},
			success: function (data) {

				window.alert(id + " " + nama + " " + alamat + " " + no + " " + jk + " " + gaji);
				window.location.href = "#page-one";
				location.reload()
			}

		});
	},
	deletePenduduk: function (id) {
		$.ajax({
			type: "POST",
			url: 'http://localhost/ppk2/web_service_delete.php',
			data: {
				id: id
			},
			success: function (data) {
				window.alert("penduduk dengan ID : " + id + " telah di hapus");
				window.location.href = "#page-one";
				location.reload()
			}

		});
	},

	initShowAdmin: function () {
		$.ajax({
			url: 'http://localhost/ppk2/web_service_admin.php',
			type: 'get',
			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					var appendList = '<li class="ui-corner-all"><h2>' + dataObject[i].Nama_Admin +
						'</h2><p>ID : ' + dataObject[i].ID_Admin + '</p></a></li>';
					$('#list-admin').append(appendList);
				}
				$('#list-admin').listview('refresh');
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},

	initShowPdd: function () {
		$.ajax({
			url: 'http://localhost/ppk2/web_service.php',
			type: 'get',


			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					var appendList = '<li class="ui-btn ui-corner-all"><h2>' + dataObject[i].Nama_Penduduk +
						'</h2><p>ID : ' + dataObject[i].ID_Penduduk + '</p></a></li>';
					$('#list-villagerdel').append(appendList);
				}
				$('#list-villagerdel').listview('refresh');
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},
	initShowListAdmin: function () {
		$.ajax({
			url: 'http://localhost/ppk2/web_service_admin.php',
			type: 'get',
			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					var appendList = '<li id="detail-listadmin" data-id="' + dataObject[i].ID_Admin + '"><h2>' + dataObject[i].Nama_Admin +
						'</h2></li>';
					$('#list-adminsurat').append(appendList);
				}
				$('#list-adminsurat').listview('refresh');
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},
	initShowDetailListAdmin: function (id_admin) {
		$.ajax({
			url: 'http://localhost/ppk2/web_service_admin.php',
			type: 'get',
			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					if (dataObject[i].ID_Admin == id_admin) {
						document.getElementById('idadmin').value = dataObject[i].ID_Admin;

					};
				};
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},
	initShowListPenduduk: function () {
		$.ajax({
			url: 'http://localhost/ppk2/web_service.php',
			type: 'get',
			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					var appendList = '<li id="detail-listpdd" data-id="' + dataObject[i].ID_Penduduk + '"><h2>' + dataObject[i].Nama_Penduduk +
						'</h2></li>';
					$('#list-pddsurat').append(appendList);
				}
				$('#list-pddsurat').listview('refresh');
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},
	initShowDetailListPdd: function (id_penduduk) {
		$.ajax({
			url: 'http://localhost/ppk2/web_service.php',
			type: 'get',
			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					if (dataObject[i].ID_Penduduk == id_penduduk) {
						document.getElementById('id_penduduk').value = dataObject[i].ID_Penduduk;

					};
				};
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	},
	addSurat: function (idpenduduk, idadmin, idsurat, ketsurat) {
		$.ajax({
			type: "POST",
			url: 'http://localhost/ppk2/web_service_addsurat.php',
			data: {
				idpenduduk: idpenduduk,
				idadmin: idadmin,
				idsurat: idsurat,
				ketsurat: ketsurat
			},
			success: function (data) {
				window.alert(ketsurat + " Sukses Ditambahkan");
				window.location.href = "#page-tampilsurat";
				location.reload()
			}
		});
	},
	initShowSurat: function () {
		$.ajax({
			url: 'http://localhost/ppk2/web_service_surat.php',
			type: 'get',

			success: function (dataObject) {
				for (var i = 0; i < dataObject.length; i++) {
					var appendList = '<li><h2>ID : ' + dataObject[i].ID_Surat +
						' || ' + dataObject[i].Ket_Surat + '</h2><p>Pemilik Surat : ' + dataObject[i].Nama_Penduduk + '</p><p>Dibuat Oleh : ' + dataObject[i].Nama_Admin + '</p></li>';
					$('#list-surat').append(appendList);
				}
				$('#list-surat').listview('refresh');
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		});
	}

};