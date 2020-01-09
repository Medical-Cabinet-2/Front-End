import React from 'react';
import { Route } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';
import SignUp from './components/sign-up-form/signUp';
import LogIn from './components/login-form/logIn';
import VerifyAge from './components/confirm-age/ageVerifier';

import { MainContainer } from './AppStyles'
import Display from './components/dashboard/Display';

function App() {

  return (
    <MainContainer>
      <Route path = '/' component = {VerifyAge} />
      <Route exact path = '/log-in' component = {LogIn} />
      <Route exact path = '/register' component = {SignUp} />
      <Route exact path = '/dashboard' component = {Display} />
      <Routes />
    </MainContainer>
  );
};

export default App;