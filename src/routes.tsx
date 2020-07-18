import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import FavoriteMovies from './pages/FavoriteMovies';
import MovieDetail from './pages/MovieDetail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/favorite-movies" exact component={FavoriteMovies} />
      <Route path="/movie-detail/:id" exact component={MovieDetail} />
    </Switch>
  );
};

export default Routes;
