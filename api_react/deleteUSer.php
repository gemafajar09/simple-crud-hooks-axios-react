<?php

include "koneksi.php";
$id = $_GET['id'];
$data = $con->query("DELETE FROM tb_user WHERE id='$id'");

if($data == true)
{
    echo json_encode(['pesan' => 'berhasil']);
}else{
    echo json_encode(['pesan' => 'error']);
}
