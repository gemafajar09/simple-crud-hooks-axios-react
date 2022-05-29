import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Tambah = () => {
    let navigate = useNavigate();
    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [telpon, setTelpon] = useState('')
    const [status, setStatus] = useState('')

    const simpanData = () => {
        axios.post("http://192.168.1.10/api_react/simpanUser.php", {
            nama: nama,
            telpon: telpon,
            alamat: alamat,
            status: status
        }).then(result => {
            if (result.data.pesan === 'berhasil') {
                navigate("/");
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="edit-form">
                <h4>Simpan Data User</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="nama">Nama</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nama"
                            name="nama"
                            onChange={event => setNama(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telpon">telpon</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telpon"
                            name="telpon"
                            onChange={event => setTelpon(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="status"
                            name="status"
                            onChange={event => setStatus(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alamat">alamat</label>
                        <input
                            type="text"
                            className="form-control"
                            id="alamat"
                            name="alamat"
                            onChange={event => setAlamat(event.target.value)}
                        />
                    </div>

                </form>

                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={simpanData}
                >
                    Update
                </button>
            </div>
        </div>
    )
}

export default Tambah