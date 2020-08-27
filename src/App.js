import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Loader from 'react-loader-spinner';

import authOperations from './redux/auth/auth-operations';
import AppBar from './components/AppBar';

import ContainerGeneralForPage from './components/ContainerGeneralForPage';


const HomePage = lazy(() => 
    import('./pages/HomePage' /*webpackChunkName: "home-page" */)
);

const ContactsPage = lazy(() => 
    import('./pages/ContactsPage' /*webpackChunkName: "contacts-page" */)
);

const RegisterPage = lazy(() =>
    import('./pages/RegisterPage' /*webpackChunkName: "register-page" */)
);

const LoginPage = lazy( () =>
    import('./pages/LoginPage' /*webpackChunkName: "login-page" */)

);

const {getCurrentUser} = authOperations;

class App extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <ContainerGeneralForPage>
                <AppBar />
                <Suspense 
                    fallback={
                        <Loader
                            type="Puff"
                            color="#666464"
                            height={60}
                            width={60}
                        />
                    }
                >
                    <Switch>
                        <PublicRoute 
                            exact 
                            path="/" 
                            component={HomePage} 
                        />
                        <PublicRoute 
                            path="/register" 
                            component={RegisterPage}
                            restricted
                            redirectTo="/contacts"
                        />
                        <PublicRoute 
                            path="/login" 
                            component={LoginPage}
                            restricted
                            redirectTo="/contacts"
                        />
                        <PrivateRoute 
                            path="/contacts" 
                            component={ContactsPage}
                            redirectTo="/login"
                        />
                    </Switch>
                </Suspense>
            </ContainerGeneralForPage>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);