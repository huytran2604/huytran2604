$(document).ready(function(){
	var i = 1;
	$("#myBtn").on("click",function(){
		$("#myModal").modal();
	});
	//Kiểm tra tên món
	var txtTenMon = $("#txtTenMon");
	var tbTenMon = $("#tbTenMon");
	function KiemtraTM(){
		if(txtTenMon.val() == ""){
			tbTenMon.html("* bắt buộc nhập");
			return false;
		}
		tbTenMon.html("*");
		return true;
	}
	txtTenMon.blur(KiemtraTM);
	
	//Kiểm tra mô tả
	var txtMoTa = $("#txtMoTa");
	var tbMoTa = $("#tbMoTa");
	function KiemtraMT(){
		if(txtMoTa.val() == ""){
			tbMoTa.html("* bắt buộc nhập");
			return false;
		}
		tbMoTa.html("*");
		return true;
	}
	txtMoTa.blur(KiemtraMT);

	//Kiểm tra giá 
	var txtGia = $("#txtGia");
	var tbGia = $("#tbGia");
	function KiemTraGia(){
		var gia = txtGia.val();
		if(gia == ""){
			tbGia.html("* bắt buộc");
			return false;
		}
		if(isNaN(gia)){
			tbGia.html("* phải nhập số");
			return false;
		}
		if(eval(gia)<=0){
			tbGia.html("* phải nhập số > 0");
			return false;
		}
		tbGia.html("*");
		return true;
	}
	txtGia.blur(KiemTraGia);
	
	$("#btnSave").click(function(){
		if( !KiemtraTM() || !KiemtraMT() || !KiemTraGia()){
			$("#thongbao1").html("Mời bạn nhập đúng và đẩy đủ thông tin");
			return false;
		}
		var stt = (i++);
		var tenmon = txtTenMon.val();
		var mota =  txtMoTa.val();
		var gia = txtGia.val();
		var anh = $("#txtAnh").val().substring(12);
		var them = "<tr><td>"+ stt +"</td><td>" + tenmon  +"</td><td>" + mota +"</td><td>" + gia +"</td><td>" + anh +"</td></tr>";
		$("table tbody").append(them);
		$("#myModal").modal("hide");
		return true;
	});

	$("#btnDn").on("click",function(){
		$("#myAccount").modal();
	});
	//kiem tra dang nhap var tk = nhatdang,pass= 17061341//////
	var txtTaiKhoan = $("#txtTaiKhoan");
	var tbTaiKhoan = $("#tbTaiKhoan");
	function KiemTraTKh(){
		if(txtTaiKhoan.val() == ""){
			tbTaiKhoan.html("* bắt buộc nhập");
			return false;
		}

		if(txtTaiKhoan.val() != "nhatdang"){
			tbTaiKhoan.html("* Tên đăng nhập sai");
			return false;
		}
		tbTaiKhoan.html("*");
		return true;
	}
	txtTaiKhoan.blur(KiemTraTKh);
	// kiểm tra mật khẩu nếu khác '17061341' thì báo lỗi

	var txtMatKhau = $("#txtMatKhau");
	var tbMatKhau = $("#tbMatKhau");
	function KiemTraMKh(){
		if(txtMatKhau.val() == ""){
			tbMatKhau.html("* bắt buộc nhập");
			return false;
		}
		if(txtMatKhau.val() != "17061341"){
			tbMatKhau.html("* Sai mật khẩu!");
			return false;
		}
		tbMatKhau.html("*");
		return true;
	}
	txtMatKhau.blur(KiemTraMKh);
	
	//kiểm tra số thứ tự
	var txtSTT = $("#txtSTT");
	var tbSTT = $("#tbSTT");
	function KiemTraSTT(){
		if(txtSTT.val() == ""){
			tbTaiKhoan.html("* bắt buộc nhập");
			return false;
		}
		tbSTT.html("*");
		return true;
	}
	txtSTT.blur(KiemTraSTT);
	
	$("#btnDelete").click(function(){
		$("#Delete").modal();
	});
	$("#btnLogIn").click(function(){
		if( !KiemTraTKh() || !KiemTraMKh()){
			$("#thongbao2").html("Mời đăng nhập");
			return false;
		}
		$("#myAccount").modal("hide");
		$("#btnDn").hide();
		document.getElementById("btnDelete").style.display = "block";
		return true;
	});

	$("#btnOK").click(function(){
		$("#Delete").modal("hide");
		var stt = $(this).find.closest("table tbody").find("td:nth-child(2)");
		if($("#stt")==$("#txtTenMon")){
			$("table tbody").parents("tr").remove();
		};
	});	
});
