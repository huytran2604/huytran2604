<?php 
	$conn = new mysqli("nhatdang.mysql.database.azure.com","nhatdang@nhatdang","Cndprokute1","Foodmenu") or die('Error'.mysql_error());
	$sql = "SELECT * FROM food_menu";
	$result=$conn->query($sql);
	echo "<table border='1' > 
	<tr> 
	<td align=center><b>Stt</b></td> 
	<td align=center><b>Tên món</b></td> 
	<td align=center><b>Mô tả</b></td> 
	<td align=center><b>Đơn giá</b></td></td>"; 
	if($result->num_rows>0) 
	{ 
		while($row = $result->fetch_assoc())
		{
			echo "<tr>";
			echo "<td>".$row['id']."</td>";
			echo "<td>".$row['fname']."</td>";
			echo "<td>".$row['descr']."</td>";
			echo "<td>".$row['price']."</td>";
			echo "</tr>";
		} 
	} 
	echo "</table>"; 
?> 