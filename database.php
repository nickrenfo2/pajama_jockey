<?PHP

$servername = 'localhost';
$username = 'djpj';
$password = 'pajammin';
$db = 'djpj';

$mysqli = new mysqli($servername,$username,$password,$db);

//Create connection
//$conn = new mysqli($servername,$username,$password);

//Check conn
if ($mysqli->connect_errno) {
    echo"Connection Failed: " . $conn->connect_error;
}
echo "Connected successfully";

function createParty() {
    $query = "insert into party (username) values ('testuser')";
    $res  = mysql_query($query);
}

?>