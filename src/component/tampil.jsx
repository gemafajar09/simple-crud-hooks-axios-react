import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getUsers, deleteUsers } from '../api/api';

function Tampil() {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    const getAll = async () => {

        try {
            await getUsers().then(({ data }) => {
                setDataUser(data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const hapusData = async id => {
        try {
            await deleteUsers(id).then(({ data }) => {
                if (data.pesan === 'berhasil') {
                    getAll()
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Telpon</th>
                    <th>Status</th>
                    <th>aksi</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataUser.map((post, index) => (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.nama}</td>
                            <td>{post.telpon}</td>
                            <td>{post.alamat}</td>
                            <td>
                                <div className="btn-group">
                                    <Link to={`/edit/${post.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <button onClick={() => hapusData(post.id)} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tampil