
<?php
$user=$_GET["user"];
$pwd=$_GET["pwd"];

if($user="gonsakon" && $pwd==1234){
    echo "Welcome, ".$user."<br/>";
}else{
    echo "Failed!"."<br/>";
}


echo "<br/>";

?>
