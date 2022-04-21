import React from "react";
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <>
    <div className="fullscreen-div">
        <div className="btn-parent">
        <div className="arrow-none"></div></div>

        <div className="column">

        <div className="subnav-parent"></div>

    <form className="login-form">
        <h2 className="tf-h2">login</h2> 
        <div className="form-group">
            <input type="text" className="form-input" spellcheck="false"></input>
            <label className="form-label">E-MAIL</label>
        </div>
        <div className="form-group">
            <input type="password" className="form-input" spellcheck="false"></input>
            <label className="form-label">PASSWORD</label>
        </div>
        <input type="submit" className="submit-btn"></input>
    </form>

        <div className="subnav-parent">
            <div className="subnav subnav-active"></div>
            <div className="subnav"></div>
        </div>

    </div>

    <div className="btn-parent" as={Link} to='/signup' >

    <div className="arrow-right"></div>
    </div>
    </div>
    </>
  );
};

export default LoginPage;