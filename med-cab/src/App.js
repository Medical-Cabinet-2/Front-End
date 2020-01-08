import React from 'react';
import { Route } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';
import SignUp from './components/sign-up-form/signUp';
import LogIn from './components/login-form/logIn';


import { MainContainer } from './AppStyles'

function App() {

  return (
    <MainContainer>
      <Route exact path = '/' component = {LogIn} />
      <Route exact path = '/log-in' component = {LogIn} />
      <Route exact path = '/register' component = {SignUp} />
      <Routes />
    </MainContainer>
  );
};

export default App;