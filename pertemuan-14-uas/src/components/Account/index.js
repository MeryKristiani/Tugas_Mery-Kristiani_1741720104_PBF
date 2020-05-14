import React from 'react';

import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import "../Account/account.css";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div id="account1">
        <h1 className="h1-1">
          Account
        </h1>
        {/* <input type="file"/> */}
        {/* <h1>Profile</h1> */}
        {/* <ul className="user">
          Username:{authUser.username}
        </ul> */}
        <ul className="email">
          Email:{authUser.email}
        </ul>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);