import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/userAction';

const NavDiv = styled.div`
  background-color: #BDD5BC;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  position: fixed;
`;

const LogOut = styled.div`
  background-color: #BDD5BC;
  color: white;
  fontFamily: Roboto, sans-serif;
  fontSize: 20;
  textDecoration: none;
  cursor: pointer;
`

const NavBar = ({ loggedIn, logoutUser }) => {

  const history = useHistory();

  const logout = e => {
    e.preventDefault();
    logoutUser();
    history.push('/log-in');
  }

  return (
    <NavDiv>
        <div>
            <a href="https://medical-cabinet-2.github.io/Marketing/index.html">Home</a>
        </div>
        <div>
            <a href="https://medical-cabinet-2.github.io/Marketing/about.html">About</a>
        </div>
        {/* <div>
            <Link to='/log-in'>Log In</Link>
        </div> */}

      
        {/* register and login should not appear on navbar when loggedin */}
        {!loggedIn && (
            <>
        <div>
            <Link to='/register'>Register</Link>
        </div>
        <div>
            <Link to='/log-in'>Login</Link>
        </div>
        </>
        )}
       <LogOut onClick={logout}>
            Logout <span role='img' aria-label='cry'>😭</span>
       </LogOut>
    </NavDiv>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)