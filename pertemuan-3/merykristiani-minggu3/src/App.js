import React from 'react';
import logo from './aing.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="Title">BIODATA</p>
        <div class="row">
          <div class="col-5">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="col-1">
            <p>Nama:</p>
            <p>TTL:</p>
            <p>Gender:</p>
            <p>Alamat:</p>
            <p>Status:</p>
            <p>Hobi:</p>
            <p>Email:</p>
            <p>Github:</p>
          </div>
          <div class="col-6">
            <p>Mery Kristiani</p>
            <p>Blitar, 2 Maret 1998</p>
            <p>Perempuan</p>
            <p>D'wiga Regency A5/11</p>
            <p>Mahasiswa</p>
            <p>Badminton</p>
            <p>merykristiani2@gmail.com</p>
            <p>https://github.com/MeryKristiani/</p>
          </div>
      </div>
      </header>
    </div>
  );
}

export default App;
