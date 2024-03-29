import React, { useState, useEffect } from 'react';
import { FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  surname: '',
  phoneNumber: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and use navigaet

  const { isLoading, showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, surname, phoneNumber, email, password, isMember } = values;
    if (
      !email ||
      !password ||
      (!isMember && !name) ||
      (!isMember && !surname) ||
      (!isMember && !phoneNumber)
    ) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>{values.isMember ? 'Logowanie' : 'Rejestracja'}</h3>
        {showAlert && <Alert />}
        {/* imie */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            labelText='Imię'
          />
        )}
        {!values.isMember && (
          <FormRow
            type='text'
            name='surname'
            value={values.surname}
            handleChange={handleChange}
            labelText='Nazwisko'
          />
        )}
        {!values.isMember && (
          <FormRow
            type='text'
            name='phoneNumber'
            value={values.phoneNumber}
            handleChange={handleChange}
            labelText='Numer telefonu'
          />
        )}

        {/* email */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          labelText='E-mail'
        />
        {/* password */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText='Hasło'
        />
        <button type='submit' className='btn btn-block'>
          {values.isMember ? 'Zaloguj się' : 'Zarejestruj się'}
        </button>
        <p>
          {values.isMember ? 'Nie masz konta?' : 'Masz juz konto?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Załóż je' : 'Zaloguj się'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
