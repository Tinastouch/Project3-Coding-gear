import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

// const LoginPage = () => {

  return (
    <>
    <div className="fullscreen-div">
        <div className="btn-parent">
        <div className="arrow-none"></div></div>

        <div className="column">

        <div className="subnav-parent"></div>

    <form onSubmit={handleFormSubmit} className="login-form">
        <h2 className="tf-h2">login</h2> 
        <div className="form-group">
            <input 
            placeholder="youremail@test.com"
            name="email"
            type="text" 
            className="form-input" 
            spellcheck="false"
            onChange={handleChange}
            ></input>
            <label className="form-label">E-MAIL</label>
        </div>
        <div className="form-group">
            <input 
            placeholder="******"
            name="password"
            type="password" 
            className="form-input" 
            spellcheck="false"
            id="password"
            onChange={handleChange}>    
            </input>
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

export default Login;