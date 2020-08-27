import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const {getIsAuthenticated} = authSelectors;

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted 
      ? (<Redirect to={redirectTo} />) 
      : (<Component {...props} />)
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});


export default connect(mapStateToProps)(PublicRoute);