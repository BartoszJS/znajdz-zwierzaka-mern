import React, { useState, useEffect } from 'react';
import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

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

  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>Logowanie</h3>
        {/* imie */}
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
          labelText='Imię'
        />
        {/* nazwisko */}
        <FormRow
          type='text'
          name='surname'
          value={values.surname}
          handleChange={handleChange}
          labelText='Nazwisko'
        />
        {/* phoneNubmer */}
        <FormRow
          type='text'
          name='phoneNumber'
          value={values.phoneNumber}
          handleChange={handleChange}
          labelText='Numer telefonu'
        />
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
          Zaloguj się
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
