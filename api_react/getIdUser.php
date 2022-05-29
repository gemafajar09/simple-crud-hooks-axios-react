<?php

$json = [];
include "koneksi.php";
$id = $_GET['id'];
$data = $con->query("SELECT * FROM tb_user WHERE id='$id'")->fetch_assoc();


    $json[] = array(
        'id' => $data['id'],
        'nama' => $data['nama'],
        'telpon' => $data['telpon'],
        'alamat' => $data['alamat'],
        'status' => $data['status']
    );


echo json_encode($json);