import React from "react";
// import Img from 'react-image'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

// const Img = require('react-image')
// const myComponent = (
//   <Img src="../img/80D.jpg" />
//   )

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul className="header">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/produkstore">Produk Store</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/produkstore">
            <ProdukStore />
          </PrivateRoute>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome Home..!!!</h2>
    </div>
  );
}

function ProdukStore() {
  return (
    <div>
      <h2>Produk Store</h2>
      <center>
    <table border="3" align="100%">
    <thead>
			<tr>
				<th>Kamera</th>
				<th>Tipe Kamera</th>
				<th>Harga</th>
				<th>Cart</th>
        <th>Buy</th>
			</tr>
		</thead>
    <tr>
        <td>
        
        </td>
        <td>Canon EOS 80D</td>
        <td>Rp. 17.590.000</td>
        <td>
          <a href="#" className="btn btn-primary">
                Add to cart
          </a>
        </td>
        <td>
          <a href="#" className="btn btn-primary">
                Buy
          </a>
        </td>
    </tr>
    <tr>
        <td></td>
        <td>Canon EOS 70D</td>
        <td> Rp. 18.640.000</td>
        <td>
          <a href="#" className="btn btn-primary">
                Add to cart
          </a>
        </td>
        <td>
          <a href="#" className="btn btn-primary">
                Buy
          </a>
        </td>
    </tr>
    <tr>
        <td> 
          <img src="./img/750.jpeg"></img>
        </td>
        <td> Canon EOS 750D</td>
        <td> Rp. 10.030.000</td>
        <td>
          <a href="#" className="btn btn-primary">
                Add to cart
          </a>
        </td>
        <td>
          <a href="#" className="btn btn-primary">
                Buy
          </a>
        </td>
    </tr>
    <tr>
        <td> </td>
        <td> Canon EOS 5D Mark IV</td>
        <td> Rp. 62.630.000</td>
        <td>
          <a href="#" className="btn btn-primary">
                Add to cart
          </a>
        </td>
        <td>
          <a href="#" className="btn btn-primary">
                Buy
          </a>
        </td>
    </tr>
</table>
</center>
</div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" Mery Kristiani "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

