import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1 className="h1-1">
      Artikel/Review Terbaru
    </h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);