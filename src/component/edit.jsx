import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getDataId, updateData } from '../api/api';

const Edit = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [telpon, setTelpon] = useState('')
    const [status, setStatus] = useState('')

    const getData = async id => {
        try {

            await getDataId(id).then(response => {
                console.log(response.data[0]);
                setNama(response.data[0].nama);
                setAlamat(response.data[0].alamat);
                setTelpon(response.data[0].telpon);
                setStatus(response.data[0].status);
            })
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (id)
            getData(id);
    }, [id]);

    const updateDataUser = async id => {
        console.log(id);
        const user = {
            nama: nama,
            telpon: telpon,
            alamat: alamat,
            status: status
        }
        try {
            await updateData(id, user).then(response => {
                if (response.data.pesan === 'berhasil') {
                    navigate("/")
                }
            })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {
                <div className="edit-form">
                    <h4>Edit Data User</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nama">Nama</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama"
                                name="nama"
                                value={nama}
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
                                value={telpon}
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
                                value={status}
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
                                value={alamat}
                                onChange={event => setAlamat(event.target.value)}
                            />
                        </div>

                    </form>

                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={() => updateDataUser(id)}
                    >
                        Update
                    </button>
                </div>
            }
        </div>
    )
}

export default Edit