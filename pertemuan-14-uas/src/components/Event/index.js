import React, {Component} from "react";
import ListProduk from "../Event/Post.js";
import * as firebase from "firebase";
import "../Event/event.css";

class EventPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            listProduk: []
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        })
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusProduk = (idProduk) => {        // fungsi yang meng-handle button action hapus data
        const {listProduk} = this.state;
        const newState = listProduk.filter(data => {
            return data.uid !== idProduk;
        })
        this.setState({listProduk: newState})
    }

    handleTambahProduk = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertProduk = {...this.state.insertProduk};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertProduk['id'] = timestamp;
        formInsertProduk[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertProduk: formInsertProduk
        });
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        let image = this.refs.gambarProduk.value;
        let title = this.refs.judulProduk.value;
        let body = this.refs.isiProduk.value;
        let link = this.refs.pageProduk.value;
        let uid = this.refs.uid.value;

        if (uid && image && title && body && link){                  // Cek apakah semua data memiliki nilai (tidak null)
            const {listProduk} = this.state;
            const indeksProduk = listProduk.findIndex(data => {
                return data.uid === uid;
            })
            listProduk[indeksProduk].image = image;
            listProduk[indeksProduk].title = title;
            listProduk[indeksProduk].body = body;
            listProduk[indeksProduk].link= link;
            this.setState({listProduk});
        } else if (image && title && body && link){                  // Cek jika apakah tidak ada data di server
            const uid = new Date().getTime().toString();
            const {listProduk} = this.state;
            listProduk.push({ uid, image, title, body, link });
            this.setState({listProduk});
        }

        this.refs.gambarProduk.value = "";
        this.refs.judulProduk.value = "";
        this.refs.isiProduk.value = "";
        this.refs.pageProduk.value = "";
        this.refs.uid.value = "";
    }

    render() {
        return(
          <div className="nav">
            <div className="post-artikel" id="event1">
            <h2 id="h2-1">
              Event Fotografi
            </h2>
              <div className="container">
                    <div className="form-group row">
                        <label htmlFor="image" className="col-sm-2 col-form-label" id="nama-event">Picture Event</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="image" name="image" ref="gambarProduk"
                            onChange={this.handleTambahProduk}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label" id="nama-event">Nama Event</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulProduk"
                            onChange={this.handleTambahProduk}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label" id="nama-event">Link Event</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="link" name="link" ref="pageProduk"
                            onChange={this.handleTambahProduk}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label" id="nama-event">Description of Event</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiProduk"
                            onChange={this.handleTambahProduk}></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid"/>
                    <button
                      type="submit"
                      className="btn btn-outline mr-3"
                      align="center"
                      id="save"
                      onClick={this.handleTombolSimpan}>

                        Save

                    </button>
                </div>

                <br></br>
                <br></br>

                <h2 id="h2-1"> <br></br>
                  List Event Fotografi
                </h2> <br></br> {
                    this
                    .state
                    .listProduk
                    .map(produk => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <ListProduk
                                key={produk.uid}
                                image={produk.image}
                                judul={produk.title}
                                isi={produk.body}
                                page={produk.link}
                                idProduk={produk.uid}
                                hapusProduk={this.handleHapusProduk}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }

            </div>
            </div>
        )
    }
}

export default EventPage;