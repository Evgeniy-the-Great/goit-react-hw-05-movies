import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { mainRoutes } from '../routes/mainRoutes';

const Main = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route
          path="/movies/:movieId"
          component={lazy(() =>
            import('../../pages/MovieDetails/MovieDetails'),
          )}
          exact={false}
        />
        {mainRoutes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Main;
