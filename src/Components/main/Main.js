import React from 'react';
import { Route, Switch } from 'react-router';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import { mainRoutes } from '../routes/mainRoutes';
const Main = () => {
  return (
    <Switch>
      <Route path="/movies/:movieId" component={MovieDetailsPage} exact />
      {mainRoutes.map(({ path, component, exact }) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
    </Switch>
  );
};

export default Main;
