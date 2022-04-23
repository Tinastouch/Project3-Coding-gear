import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const AppNavbar = () => {

  return (
    <>
      <header className="App-header">
        <h1 className="headerh1">
          <Link to='/'>.shop()</Link> 
        </h1>
        <div className="navparent">
          <nav className="navheader activenav">
            <Link to='/'>SHOP</Link> 
          </nav>
          {Auth.loggedIn() ? (
            <>
              <nav className="navheader">
                <Link to='/user'>ACCOUNT</Link>
              </nav>
              <nav className="navheader">
                <Link to='/cart'>CART</Link>
              </nav>
              <nav className="navheader">
                <Link onClick={Auth.logout}>LOGOUT</Link>
              </nav>
            </>
          ) : (
            <>
              <nav className="navheader">
                <Link to='/login'>CART</Link>
              </nav>
              <nav className="navheader">
                <Link to='/login'>LOGIN</Link>
              </nav>
              <nav className="navheader">
                <Link to='/signup'>SIGN-UP</Link>
              </nav>
            </>
          )}
          {/* <nav className="navheader">ACCOUNT</nav>
          <nav className="navheader">CART</nav>
          <nav className="navheader">LOGOUT</nav> */}
        </div>
      </header>
    </>
  );
};

export default AppNavbar;
