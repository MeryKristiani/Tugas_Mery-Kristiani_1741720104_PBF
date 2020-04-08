import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../../component/BlogSpot/Post";

class BlogPost extends Component {      
    state = {                     // komponen state dari React untuk statefull component
        listArtikel: [],          // variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {          // variabel yang digunakan untuk menampung sementara data yang akan di insert
          userID: 1,              // kolom userId, id, title dan body sama, mengikuti kolom yang ada pada lidtArtikel.json
          id: 1,
          title: "",
          body: ""
        }
      };

    ambilDataDariServerAPI = () => {     // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        API.getNewsBlog().then(result => {
          this.setState( {
            listArtikel: result
          })
        })
    }

    componentDidMount() {             // komponen untuk mengecek ketika component telah di mount ing, maka panggil API
        this.ambilDataDariServerAPI() // ambil data dari server API lokal
    }

    handleHapusArtikel = (data) => {    // fungsi yang meng-handle button action hapus data
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})  // alamat URL API yang ingin kita HAPUS datanya
        .then(res => {    // ketika proses hapus berhasil, maka ambil data dari server API lokal
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState( {
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {        // fungsi untuk meng-handle tombol simpan
      API.postNewsBlog(this.state.insertArtikel)
        .then((response) => {
           this.ambilDataDariServerAPI();    // reload/refresh data
      });
    }

    render() {
        return (
          <div className="post-artikel">
            <div className="form pb-2 border-bottom">
              <div className="form-group row"></div>
              <label htmlFor="title" className="col-form-label">
                NIM
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-nim"
                  id="nim"
                  name="nim"
                  onChange={this.handleTambahArtikel}
                />
              </div>
              <div className="form-group row"></div>
              <label htmlFor="title" className="col-form-label">
                Nama
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-nama"
                  id="nama"
                  name="nama"
                  onChange={this.handleTambahArtikel}
                />
              </div>
              <div className="form-group row"></div>
              <label htmlFor="title" className="col-form-label">
                Alamat
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-alamat"
                  id="alamat"
                  name="alamat"
                  onChange={this.handleTambahArtikel}
                />
              </div>
              <div className="form-group row"></div>
              <label htmlFor="title" className="col-form-label">
                Nomor HP:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-hp"
                  id="hp"
                  name="hp"
                  onChange={this.handleTambahArtikel}
                />
              </div>
              <div className="form-group row"></div>
              <label htmlFor="title" className="col-form-label">
                Angkatan
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-angkatan"
                  id="angkatan"
                  name="angkatan"
                  onChange={this.handleTambahArtikel}
                />
              </div>
              <div className="form-group row"></div>
              <label htmlFor="title" className="col-form-label">
                Status
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-status"
                  id="status"
                  name="status"
                  onChange={this.handleTambahArtikel}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleTombolSimpan}
            >
              Simpan
            </button>
            <h2>Daftar Mahasiswa</h2>
            {this.state.listArtikel.map(artikel => {
              return (
                <Post
                  idMahasiswa={artikel.id}
                  nim={artikel.nim}
                  nama={artikel.nama}
                  alamat={artikel.alamat}
                  hp={artikel.hp}
                  angkatan={artikel.angkatan}
                  status={artikel.status}
                  hapusArtikel={this.handleHapusArtikel}
                />
              );
            })}
          </div>
        );
      }
    }

export default BlogPost;