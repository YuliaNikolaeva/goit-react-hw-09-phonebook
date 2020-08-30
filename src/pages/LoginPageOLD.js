import React, { useState } from 'react';
import {useSelector, useDispatch }  from 'react-redux';

import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

import { Button } from 'react-bootstrap';
import s from './LoginPage.module.css';
import Container from '../components/Container';
import MessageError from '../components/MessageError';


const {login} = authOperations;
const {errorInAuth} = authSelectors;

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const errInAuth = useSelector(errorInAuth);

    const updateEmail = e => {
        setEmail(e.target.value);
      };
    
      const updatePassword = e => {
        setPassword(e.target.value);
      };

      const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({email, password}), [dispatch, email, password])
      };

    return (
        <Container title="Authorization page">
            {errInAuth && <MessageError text={'Error in Login or Password'}/>}
            <form
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                <label className={s.label}>
                    <div className={s.head__field}>E-mail</div>
                    <input
                        className={s.input} 
                        type="email"
                        name="email"
                        value={email}
                        onChange={updateEmail}
                    />
                </label>

                <label>
                    <div className={s.head__field}>Pass</div>
                    <input
                        className={s.input} 
                        type="password"
                        name="password"
                        value={password}
                        onChange={updatePassword}
                    />
                </label>
                <Button type="submit">Enter</Button>
            </form>
        </Container>
    ) 
};