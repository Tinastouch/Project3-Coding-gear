import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {

  return (
    <>
      <header className="App-header">
        <h1 className="headerh1">[Closet]</h1>
        <div className="navparent">
          <nav className="navheader activenav">SHOP</nav>
          <nav className="navheader">ACCOUNT</nav>
          <nav className="navheader">CART</nav>
          <nav className="navheader">LOGOUT</nav>
        </div>
      </header>
    </>
  );
};

export default AppNavbar;
