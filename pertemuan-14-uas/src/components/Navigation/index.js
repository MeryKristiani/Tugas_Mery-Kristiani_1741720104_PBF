import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={ROUTES.BRAND}>Ruang MOTRET</Link>
      <ul className="nav navbar-nav">
      <li>
        <Link className="home" to={ROUTES.EVENT}>Event</Link>
      </li>
      <li>
        <Link className="account" to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link className="admin" to={ROUTES.HOME}>Profile</Link>
      </li>
      </ul>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={ROUTES.BRAND}>
              <SignOutButton />
            </Link>
          </li>
          </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={ROUTES.BRAND}>Ruang MOTRET</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="btn btn-outline-success mr-3" to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-outline-danger" to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;