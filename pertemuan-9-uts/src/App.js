import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from './img/astrox99.jpg';
import image1 from './img/nanoray900.jpg';
import image2 from './img/g-force8800.jpg';
import image3 from './img/turbo-x.jpg';
import image4 from './img/adidas-f100.jpg';
import image5 from './img/adidas-precision-380.jpg';
import image6 from './img/tk-hmrl.jpg';
import image7 from './img/tk9900.jpg';
import image12 from './img/yonex_logo.png';
import image13 from './img/li-ning.png';
import image14 from './img/adidas.jpg';
import image15 from './img/victor.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li className="navbar2">
            <a><Link to="/public">Beranda</Link></a>
          </li>
          <li className="navbar2">
            <a><Link to="/private">Info Raket</Link></a>
          </li>
          <li className="navbar3">
            <a><Link to="/login"><AuthButton/></Link></a>
          </li>
        </ul>
        

        <Switch>
          <Route path="/public">
            <PublicPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Selamat Datang!!{"user"}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}>
          Sign out
      </button>
    </p>
  ) : (
    <p>Kamu Belom Login. Klik disini!!</p>
  )
}

function PrivateRoute({children, ...rest}){
  return (
    <Route
      {...rest}
      render = {({location}) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to = {{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )}
    />
  )
}

function PublicPage() {
  return (
    <div>
      <h2 align='center'>Beranda</h2><br></br>
      <center>
      <div className="container">
        <div className="row"> 
          <div>
            <img src={image12} 
              style={{width: 600, height: 200}}
            />
            <p className='Caption'>Yonex</p>
            <p className='Caption1' align="justify">
              Raket buatan Yonex dirancang sedemikian rupa untuk memberikan kamu kontrol yang sempurna 
              dalam permainan bulu tangkis. Raket ini akan membuat kamu memiliki tenaga lebih dalam 
              memukul kok dari berbagai sudut di lapangan. Alat ini mendukung kamu dalam melakukan 
              pukulan backhand maupun forehand secara maksimal. Pola ikatan senar yang kokoh akan 
              membuat smash kamu mengalahkan lawan.</p><br></br>
          </div>

          <div>
            <img src={image13} 
              style={{width: 600, height: 200}}
            />
            <p className='Caption'>Li-Ning</p>
            <p className='Caption1' align="justify">
              Li Ning merupakan produsen produk olahraga berkualitas yang telah digunakan oleh banyak atlet berbakat 
              tingkat internasional. Pebulu tangkis Indonesia, Tantowi Ahmad juga menggunakan raket ini. 
              Raket badminton Li Ning dibuat dengan bahan carbon graphite yang solid namun ringan, 
              dan dilengkapi senar yang kuat. Dengan teknologi aerotec beam system dan dynamic optinum frame, 
              raket ini akan mendukung kamu dalam mengerahkan pukulan smash terbaik untuk menumbangkan lawan.</p><br></br>
          </div>

          <div>
            <img src={image14} 
              style={{width: 600, height: 200}}
            />
            <p className='Caption'>Adidas</p>
            <p className='Caption1' align="justify">
              Sebagai salah satu produsen produk olahraga, Adidas selalu memberikan kualitas dan 
              kenyamanan tingkat tinggi. Raket badminton Adidas dibuat dengan bahan pure nano carbon, 
              zylon super fibre, dan x-tra titanium, yang menunjang kamu untuk meraih performa terbaik. 
              Dengan kepala pukulan berbentuk isometric, raket ini cocok bagi kamu yang punya gaya bermain ofensif.</p><br></br>
          </div>

          <div>
            <img src={image15} 
              style={{width: 600, height: 400}}
            />
            <p className='Caption'>Victor</p>
            <p className='Caption1' align="justify">
              Sebagai salah satu produsen produk olahraga, Adidas selalu memberikan kualitas dan 
              kenyamanan tingkat tinggi. Raket badminton Adidas dibuat dengan bahan pure nano carbon, 
              zylon super fibre, dan x-tra titanium, yang menunjang kamu untuk meraih performa terbaik. 
              Dengan kepala pukulan berbentuk isometric, raket ini cocok bagi kamu yang punya gaya bermain ofensif.</p><br></br>
          </div>
        </div>
      </div>
      </center>
    </div>
  );
}

function ProtectedPage(){
  return (
    <div className="container-fluid">
      <h2 align="center">Info Raket Badminton</h2>
      <center>
    <table border="5">
    <thead>
			<tr>
				<th style={{width:400}}>Raket</th>
				<th style={{width:250}}>Merk Raket</th>
        <th style={{width:150}}>Made In</th>
        <th style={{width:800}}>Info Raket</th>
				<th>Harga</th>
			</tr>
		</thead>
    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Yonex Astrox 99</td>
        <td>Japan</td>
        <td>
          <p align="justify">
            Salah satu dari 10 seri raket ASTROX bernama ASTROX 99 memiliki keunggulan seperti memberi 
            serangan curam dan membanjiri oposisi dengan serangan cepat dan kuat. Untuk pemain yang senang 
            melakukan smash miring dan melakukan tembakan curam demi menaklukkan titik pada lawan maka 
            raket ini sangat cocok dijadikan pilihan.</p></td>
        <td>Rp. 1.950.000</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image1}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Yonex Nanoray 900</td>
        <td>Japan</td>
        <td>
          <p align="justify">
           Seri head-light terbaru dari YONEX, NANORAY memberikan ayunan yang cepat dan terkontrol 
           dengan tolakan yang ditingkatkan melalui New Aero Frame. NANORAY dirancang untuk pemain 
           yang memaksa lawan mereka ke belakang lapangan dengan kecepatan ekstrim. Bagian atas 
           yang lebih tipis dari sisi rangka meminimalkan hambatan udara untuk kecepatan head yang 
           lebih besar, sedangkan sisi yang lebih tebal di bagian bawah kepala menghasilkan tolakan 
           maksimum melalui kekakuan kerangka yang lebih besar.</p></td>
        <td>Rp. 1.616.000</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image2}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Li-Ning G-Force 8800</td>
        <td>China</td>
        <td>
          <p align="justify">
          Raket bulutangkis Li-Ning G-Force 8800 Plus Ekstra Kuat tahan lama, ekstra kuat 
          dengan ketegangan maksimum hingga 35 lbs dan merupakan pilihan optimal untuk pemain 
          dengan keahlian yang lengkap serta seluruh pemain bulutangkis BERMAIN BERPARTALAN.

          Li-Ning G-Force 8800 Plus milik Pro Master Series. Rangkaian raket bulutangkis 
          berkualitas tinggi ini memastikan keseimbangan antara berat dan batang. 
          Stabilizer sayap Li-Ning membantu pemain menghasilkan peningkatan permainan bersih 
          atau power stroke. Tidak masalah jika Anda melepaskan serangan terik atau pertahanan kokoh, 
          raket bulutangkis Seri Pro Master adalah raket pilihan pemain bulutangkis profesional.</p></td>
        <td>Rp. 1.953.600</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image3}
              style={{height:390}}
            />
        </div>
        </td>
        <td>Li-Ning Turbo X 80</td>
        <td>China</td>
        <td>
          <p align="justify">
            Salah satu dari 10 seri raket ASTROX bernama ASTROX 99 memiliki keunggulan seperti memberi 
            serangan curam dan membanjiri oposisi dengan serangan cepat dan kuat. Untuk pemain yang senang 
            melakukan smash miring dan melakukan tembakan curam demi menaklukkan titik pada lawan maka 
            raket ini sangat cocok dijadikan pilihan.</p></td>
        <td>Rp. 400.000</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image4}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Adidas F-100</td>
        <td>England</td>
        <td>
          <p align="justify">
          Raket Badminton Adidas F100 sangat ideal untuk pemula.
          Ini fitur Tech Precision dan terbuat dari karbon grafit untuk mengurangi berat tetapi meningkatkan daya tolak.
          Memiliki keseimbangan cahaya kepala dan poros memiliki fleksibilitas yang baik.
          Harap dicatat bahwa raket ini digantung.
          Bingkai terbuat dari Aluminium.
          Shaft terbuat dari Carbon Graphite.
          Berat raket 90g ± 4 dengan keseimbangan 280 ± 5mm dan Ukuran Grip adalah 90g ± 4 / G4.
          Ketegangan Tali yang Direkomendasikan: 18-22 lbs / 8-10kg.
          Fleksibilitas: Fleksibel.
          Racket ini hadir dengan 3/4 Penutup.</p></td>
        <td>Rp. 655.000</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image5}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Adidas Precision 380</td>
        <td>England</td>
        <td>
          <p align="justify">
          Poros Grafit Karbon Nano Murni,
          Fleksibel,
          Berat raket 90 + -2g.</p></td>
        <td>Rp. 737.000</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image6}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Victor Thruster K HMR L</td>
        <td>Taiwan</td>
        <td>
          <p align="justify">
            Materi Shaft: Graphite+ Resin +7.0 SHAFT,
            Materi Frame: Graphite+Nano Resin+ Fiber Reinforced System(FRS),
            tarikan: ≦32 lbs(14.5Kg) - ≦31 lbs(14Kg),
            Berat/Ukuran Grip: 4U/G5 - 5U/G5、G6.</p></td>
        <td>Rp. 685.000</td>
    </tr>
    </tbody>

    <tbody>
    <tr align="center">
        <td style={{height:400}}>
        <div>
            <img src={image7}
              style={{height:330}}
            />
        </div>
        </td>
        <td>Victor TK 9900</td>
        <td>Taiwan</td>
        <td>
          <p align="justify">
            TK-9900 dirancang dengan teknik Energy Bow untuk memperkuat elastisitas dan kecepatan rebound, 
            menciptakan tolakan yang luar biasa setelah setiap tembakan. Desain strip grommet di kepala menaikkan 
            level dan meningkatkan perlindungan string. TK-9900 adalah raket yang ideal untuk pemain agresif.</p></td>
        <td>Rp. 2.240.000</td>
    </tr>
    </tbody>

    </table>
  </center>
</div>
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || {from: {pathname: "/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <div className="div" align="center">
        <button onClick={login}>Log in</button>
      </div>
      
    </div>
  )
}