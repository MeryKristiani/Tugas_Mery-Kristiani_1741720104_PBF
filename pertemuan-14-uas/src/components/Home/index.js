import React from 'react';

import { withAuthorization } from '../Session';
import "../Home/home.css";
import img from "../../img/bg1.jpg";

const HomePage = () => (
  <div id="home1">
    <h1 className="h1-1">
      Profil Mahasiswa
  </h1>
    <tr className="foto-profil">
      <img src={img} alt="img" height="256" width="256" />
    </tr>
    <tr className="nama1">
        <td>Nama Lengkap</td>
        <td>:</td>
        <td> Mery Kristiani</td>
    </tr>
    <tr className="ttl1">
        <td>Tempat/Tgl. Lahir</td>
        <td>:</td>
        <td> Blitar, 02 Maret 1998</td>
    </tr>
    <tr className="alamat1">
        <td>Alamat</td>
        <td>:</td>
        <td> Jl. Raya Kelud, Gandusari, Blitar</td>
    </tr>
    <tr className="hp1">
        <td>No. Hp</td>
        <td>:</td>
        <td> 085719643252</td>
    </tr>
    <tr className="email1">
        <td>Email</td>
        <td>:</td>
        <td> mchris998@gmail.com</td>
    </tr>
    <tr className="git1">
        <td>GitHub</td>
        <td>:</td>
        <td> MeryKristiani</td>
    </tr>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
