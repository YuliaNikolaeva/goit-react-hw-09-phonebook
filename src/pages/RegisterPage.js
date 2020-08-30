import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

import { Button } from 'react-bootstrap';
import s from './RegisterPage.module.css';
import Container from '../components/Container';
import MessageError from '../components/MessageError';

const {register} = authOperations;
const {errorInAuth} = authSelectors;

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const errInAuth = useSelector(errorInAuth);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = useCallback((e) => {
      e.preventDefault();

      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },[dispatch, name, email, password]
  );


  return (
    <Container title="Registration page">
      {errInAuth &&  <MessageError text={'Error in registration connect'} />}
      <form
          autoComplete="off"
          onSubmit={handleSubmit}
      >
        <label
          className={s.label}
          autoComplete="off"
        >Name
            <input
              className={s.input} 
              type="text"
              name="name"
              onChange={updateName}
              value={name}
            >
            </input>
        </label>

        <label
          className={s.label}
        >Email
            <input
              className={s.input} 
              type="email"
              name="email"
              onChange={updateEmail}
              value={email}
            >
            </input>
        </label>

        <label
          className={s.label}
          autoComplete="off"
        >Pass
            <input
              className={s.input} 
              type="password"
              name="password"
              value={password}
              onChange={updatePassword}
            >
            </input>
        </label>
        <Button type="submit">Registration</Button>
      </form>
    </Container>
  );
};