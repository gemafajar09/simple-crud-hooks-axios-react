<?php

include "koneksi.php";

$data = $con->query("SELECT * FROM tb_user");

$json = [];

foreach ($data as $key => $value) {
    $json[] = array(
        'id' => $value['id'],
        'nama' => $value['nama'],
        'telpon' => $value['telpon'],
        'alamat' => $value['alamat'],
        'status' => $value['status']
    );
}

echo json_encode($json);