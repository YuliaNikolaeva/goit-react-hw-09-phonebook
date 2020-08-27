import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import s from './UserMenu.module.css';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const {getUserName} = authSelectors;
const {logOut} = authOperations;

export default function UserMenu () {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const makeLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <>
      <div className={s.welcomeBox}>
        <div className={s.welcomeText}>Welcome,</div>
        <div className={s.welcomeName}>{name}</div>
      </div>
      <button 
        className={s.btnLogout}
        type="button" 
        onClick={makeLogOut}
      >
        Logout
      </button>
    </>
  );
};