import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Profile} />
    </Switch>
  );
};

export default Routes;
