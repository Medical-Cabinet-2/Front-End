import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/userAction';

const NavDiv = styled.div`
  background-color: #BDD5BC;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  position: fixed;
  margin-bottom: 10%;
  a {
      color: #105609;
      font-size: 1.5rem;
      font-weight: 600;
  }
`;

const LogOut = styled.div`
  background-color: #BDD5BC;
  color: #105609;
  fontFamily: Roboto, sans-serif;
  fontSize: 1.5rem;
  textDecoration: none;
  cursor: pointer;
`;

const NavBar = ({ loggedIn, logoutUser }) => {

  const history = useHistory();

  const logout = e => {
    e.preventDefault();
    logoutUser();
    history.push('/log-in');
  }

  return (
    <div>
      <NavDiv>
          <div>
              <a href="https://medical-cabinet-2.github.io/Marketing/index.html">Home</a>
          </div>
          <div>
              <Link to='/strains'>Strains</Link>
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
          <LogOut onClick={logout} className='logout'>
              Logout <span role='img' aria-label='cry'>😭</span>
          </LogOut>
      </NavDiv>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)