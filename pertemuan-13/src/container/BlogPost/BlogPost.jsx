import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
// import API from "../../services";
import firebase from "firebase";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component{
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig); // inisialisasi konfigurasi database firebase

        this.state = {              // komponen state dari React untuk statefull component
            listArtikel: []         // variabel array yang digunakan untuk menyimpan data API
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data API dari Realtime Database Firebase
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataDariServerAPI = () => {   // fungsi untuk mengirim/insert data ke API Realtime Database Firebase
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.simpanDataDariServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {        // fungsi yang meng-handle button action hapus data
        const {listArtikel} = this.state;
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel;
        });
        this.setState({listArtikel: newState});
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol submit di klik
        let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, dll)
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if (uid && title && body) { // Cek apakah semua data memiliki nilai (tidak null)
            const { listArtikel } = this.state;
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid;
            });
            listArtikel[indeksArtikel].title = title;
            listArtikel[indeksArtikel].body = body;
            this.setState({ listArtikel });
        } else if (title && body) { // Jika data belum ada di server
            const uid = new Date().getTime().toString();
            const { listArtikel } = this.state;
            listArtikel.push({ uid, title, body });
            this.setState({ listArtikel });
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value = "";
    };

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulArtikel"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2> {   // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                    this.state.listArtikel.map(artikel => {  
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} 
                        idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>  
                    })
                }
            </div>
        )
    }
}

export default BlogPost;
