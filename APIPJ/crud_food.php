<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once("config/db.php");
require_once("cmd/exec.php");


$db = new Database();
$strConn = $db->getConnection();
$strExe = new ExecSQL($strConn);

/*if ($_SERVER['REQUEST_METHOD'] == 'POST') {
$content = file_get_contents('php://input');
$food = json_decode($content, true);*/

$action = $_GET['cmd'];
$type = $_GET['type'];




switch ($action){

    case "select" :
        $sql = " SELECT * FROM tbl_food WHERE foodtype = '".$_GET['type']."' ";
        $stmt = $strExe->populateData($sql);
        $row_count = $strExe->rowCount("tbl_food");
        $usersArray = array();
        if($row_count >0) {
            foreach($stmt as $row){
                $usersArray[] = $row;
            }
        }
        echo json_encode($usersArray);
    break;


    default :
   
    }
//}


?>