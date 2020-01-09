import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import { connect } from 'react-redux';
import Routes from './routes/Routes';
import './App.css';
import SignUp from './components/sign-up-form/signUp';
import LogIn from './components/login-form/logIn';
// import VerifyAge from './components/confirm-age/ageVerifier';

import { MainContainer } from './AppStyles'
import Display from './components/dashboard/Display';
import NavBar from './components/dashboard/NavBar';

import { getUserInfo } from './store/actions/userAction';

function App({getUserInfo}) {

  const loggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (loggedIn) {
      getUserInfo(loggedIn);
    }
  }, [loggedIn, getUserInfo]);

  return (
    <>
    <NavBar />
    <MainContainer>
      <Route exact path = '/log-in' component = {LogIn} />
      <Route exact path = '/register' component = {SignUp} />
      <PrivateRoute exact path = '/dashboard' component = {Display} />
      <Routes />
    </MainContainer>
    </>
  );
};

const mapStateToProps = state =>{
  return {
      
  };
}

export default connect(mapStateToProps, {getUserInfo})(App);