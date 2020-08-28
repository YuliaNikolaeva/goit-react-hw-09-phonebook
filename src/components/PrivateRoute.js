import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const {getIsAuthenticated} = authSelectors;

export default function PrivateRoute ({
  component: Component,
  redirectTo,
  ...routeProps
})  {

  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};