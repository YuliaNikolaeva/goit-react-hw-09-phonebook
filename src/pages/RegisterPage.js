import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

import { Button } from 'react-bootstrap';
import s from './RegisterPage.module.css';
import Container from '../components/Container';
import MessageError from '../components/MessageError';
import MessageFieldError from '../components/MessageFieldError';

import { Formik } from 'formik';
import * as yup from 'yup';

const {register} = authOperations;
const {errorInAuth} = authSelectors;

export default function RegisterPage() {

  const dispatch = useDispatch();
  const errInAuth = useSelector(errorInAuth);

  const schema = yup.object().shape({
    name: yup.string()
      .typeError('Incorrect type value')
      .required('Field name is required'),
    email: yup.string()
      .typeError('Incorrect type value')
      .required('Field email is required'),
    password: yup.string()
      .min(7, 'Field password must be min 8 characters')
      .required('Field password is required'),
  })

    const handleSubmit = useCallback((values) => {
      dispatch(register(values));
    },[dispatch]
  );


  return (
    <Container title="Registration page">
      {errInAuth &&  <MessageError text={'Error in registration connect'} />}

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values, {resetForm}) => {handleSubmit(values); resetForm() }}
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
              <label
                className={s.label}
                autoComplete="off"
              >Name
                <input
                  className={s.input} 
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                >
                </input>
                {errors.name && <MessageFieldError text={errors.name} />}
              </label>

              <label
                className={s.label}
              >Email
                <input
                  className={s.input} 
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                >
                </input>
                {errors.name && <MessageFieldError text={errors.email} />}
              </label>

              <label
                className={s.label}
                autoComplete="off"
              >Pass
                <input
                  className={s.input} 
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                >
                </input>
              </label>
              {errors.name && <MessageFieldError text={errors.password} />}
              <Button 
                type="submit"
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                >Registration
              </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};