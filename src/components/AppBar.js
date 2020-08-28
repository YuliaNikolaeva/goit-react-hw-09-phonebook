import React from 'react';
import { useSelector } from 'react-redux';
import s from './AppBar.module.css';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import authSelectors from '../redux/auth/auth-selectors';

const {getIsAuthenticated} = authSelectors;

export default function AppBar({isAuthenticated}) {
    const isUserLogin = useSelector(getIsAuthenticated);

    return (
        <div className={s.appBarBox}>
            <header>
                <Navigation />
                <div className={s.secondMenuBox}>
                    {isUserLogin ? <UserMenu /> : <AuthNav />}
                </div>
            </header>
        </div>
    );
};