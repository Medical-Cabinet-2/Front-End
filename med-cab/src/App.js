import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/sign-up-form/signUp';
import LogIn from './components/login-form/logIn';
import VerifyAge from './components/confirm-age/ageVerifier';

import { MainContainer } from './AppStyles'

function App() {
  return (
    <MainContainer>
      <Route path = '/' component = {VerifyAge} />
      <Route path = '/log-in' component = {LogIn} />
      <Route path = '/register' component = {SignUp} />
    </MainContainer>
  );
}

export default App;