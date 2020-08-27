import React, { useState } from 'react';
import { useDispatch }  from 'react-redux';

import authOperations from '../redux/auth/auth-operations';

import { Button } from 'react-bootstrap';
import s from './LoginPage.module.css';
import Container from '../components/Container';


const {login} = authOperations;

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

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