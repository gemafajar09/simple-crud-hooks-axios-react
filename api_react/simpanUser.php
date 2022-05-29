<?php

include "koneksi.php";

$json = file_get_contents('php://input');
$_POST = json_decode($json,true);


$data = $con->query("INSERT INTO tb_user (nama,alamat,telpon,status) VALUES ('$_POST[nama]','$_POST[alamat]','$_POST[telpon]','$_POST[status]')");

if($data == true)
{
    echo json_encode(['pesan' => 'berhasil']);
}else{
    echo json_encode(['pesan' => 'error']);
}
