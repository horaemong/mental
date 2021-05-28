<?php header("Content-Type: text/html;charset=UTF-8"); 
$host = 'localhost'; 
$user = 'root'; 
$pw = 'apmsetup'; 
$dbName = 'testdbbb'; 
$mysqli = new mysqli($host, $user, $pw, $dbName); 
if($mysqli){ 
  echo "MySQL successfully connected!<br/>"; 
$BPM = $_GET['BPM']; 
echo "<br/>Temperature = $BPM"; 
$query = "INSERT INTO BPM (BPM) VALUES ('$BPM')"; 
mysqli_query($mysqli,$query); echo "</br>success!!"; } else{ echo "MySQL could not be connected"; } mysqli_close($mysqli); ?>
