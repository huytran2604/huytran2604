<?php
	if(isset($_POST['submit'])){
		header("location:index.html");
	}
	$fname = $_POST['txtTen'];
	$descr = $_POST['txtMoTa'];
	$price = $_POST['txtGia'];
	$conn = new mysqli("nhatdang.mysql.database.azure.com","nhatdang@nhatdang","Cndprokute1","Foodmenu");
	if($conn->connect_error){
		die('Connect error'.$conn->connect_error);
	}else{
		$result = $conn->prepare("insert into food_menu(fname,descr,price) values(?,?,?)");
		$result->bind_param("sss",$fname,$descr,$price);
		$result->execute();
	}
?>