import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const {getIsAuthenticated} = authSelectors;

export default function PublicRoute ({
  component: Component,
  redirectTo,
  ...routeProps
}) {

  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted 
        ? (<Redirect to={redirectTo} />) 
        : (<Component {...props} />)
      }
    />
  );
};