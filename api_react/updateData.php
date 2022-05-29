<?php

include "koneksi.php";
$id = $_GET['id'];

$json = file_get_contents('php://input');
$_POST = json_decode($json,true);

$data = $con->query("UPDATE tb_user SET nama='$_POST[nama]',alamat='$_POST[alamat]',telpon='$_POST[telpon]',status='$_POST[status]' WHERE id='$id'");

if($data == true)
{
    echo json_encode(['pesan' => 'berhasil']);
}else{
    echo json_encode(['pesan' => 'error']);
}

