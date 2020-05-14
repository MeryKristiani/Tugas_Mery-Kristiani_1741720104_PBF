import React from 'react';

import { AuthUserContext } from '../Session';
// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1 className="h1-1">
          Profile  
        </h1>
        {/* <h1>Profile</h1> */}
        <ul className="form-group1">
          Username:{authUser.username}</ul>
        <li>Email:{authUser.email}</li>

        {/* <PasswordForgetForm />
        <PasswordChangeForm /> */}
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);