import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';


const AuthNav = () => (
  <div>
    <NavLink
      activeStyle={{color:"#656566"}}
      className={s.secondNav}
      to="/register"
      exact
    >
      Registration
    </NavLink>
    <NavLink
      activeStyle={{color:"#656566"}}
      className={s.secondNav}
      to="/login"
      exact
    >
      Authorization
    </NavLink>
  </div>
);


export default AuthNav;