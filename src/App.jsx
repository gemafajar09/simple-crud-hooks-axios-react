import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tampil from './component/tampil'
import Tambah from './component/tambah'
import Edit from './component/edit'


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a href="/" exact="true" className="navbar-brand">Simple Crud</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" exact="true" href="/" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" exact="true" href="/Tambah">Tambah Data</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" exact="true" element={<Tampil />}></Route>
          <Route path="/tambah" exact="true" element={<Tambah />}></Route>
          <Route path="/edit/:id" exact="true" element={<Edit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
