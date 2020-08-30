import React, { useCallback } from 'react';
import {useSelector, useDispatch }  from 'react-redux';

import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

import { Button } from 'react-bootstrap';
import s from './LoginPage.module.css';
import Container from '../components/Container';
import MessageError from '../components/MessageError';
import MessageFieldError from '../components/MessageFieldError';

import { Formik } from 'formik';
import * as yup from 'yup';


const {login} = authOperations;
const {errorInAuth} = authSelectors;

export default function LoginPage() {
    const dispatch = useDispatch();

    const errInAuth = useSelector(errorInAuth);

    const schema = yup.object().shape({
        email: yup.string()
        .typeError('Incorrect type value')
        .min(1)
        .required('Field email is required'),
      password: yup.string()
        .min(1)
        .required('Field password is required'),
    })

    const handleSubmit = useCallback((values) => {
        dispatch(login(values))
      },[dispatch]
    );

    return (
        <Container title="Authorization page">
            {errInAuth && <MessageError text={'Error in Login or Password'}/>}
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    }}
                validateOnBlur
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values); 
                    resetForm();
                }}
                validationSchema={schema}
            >
                {({
                    values, 
                    errors, 
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
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
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {errors.email && <MessageFieldError text={errors.email} />}
                    </label>

                    <label>
                        <div className={s.head__field}>Pass</div>
                        <input
                            className={s.input} 
                            type="password"
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {errors.password && <MessageFieldError text={errors.password} />}
                    </label>
                    <Button 
                        type="submit"
                        disabled={!isValid}
                        onClick={handleSubmit}
                    >Enter</Button>
                </form>

                )}
            </Formik>
        </Container>
    ) 
};