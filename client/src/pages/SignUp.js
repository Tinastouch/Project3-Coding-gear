import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

// const SignUp = () => {

    function SignUp(props) {
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [addUser] = useMutation(ADD_USER);
      
        const handleFormSubmit = async (event) => {
          event.preventDefault();

          console.log(formState)
          const mutationResponse = await addUser({
            variables: {
              email: formState.email,
              password: formState.password,
            },
          });
          const token = mutationResponse.data.addUser.token;
          Auth.login(token);
        };
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          setFormState({
            ...formState,
            [name]: value,
          });
        };

    return (
        <>
        <div className="fullscreen-div">
        <div className="btn-parent">
        <NavLink to='/login'><div className="arrow-left"></div></NavLink></div>
    
            <div className="column">
    
                <div className="subnav-parent"></div>
    
                <form onSubmit={handleFormSubmit} className="signup-form">
        <h2 className="tf-h2">sign up</h2> 
        <div className="form-group">
            <input 
            type="text" 
            className="form-input" 
            spellcheck="false"
            id="email"
            name="email"
            placeholder="email"
            onChange={handleChange}></input>
            <label className="form-label">E-MAIL</label>
        </div>
        <div className="form-group">
            <input type="password" 
            className="form-input" 
            spellcheck="false"
            id="password"
            name="password"
            placeholder="*****"
            onChange={handleChange}></input>
            <label className="form-label">PASSWORD</label>
        </div>
        <div className="form-group">
            <input type="password" 
            className="form-input" 
            spellcheck="false"
            id="confirm-password"
            placeholder="*****"
            onChange={handleChange}></input>
            <label className="form-label">PASSWORD CONFIRM</label>
        </div>
        <input type="submit" className="submit-btn"></input>
    </form>
    
            <div className="subnav-parent">
                <div className="subnav"></div>
                <div className="subnav subnav-active"></div>
            </div>
    
        </div>
    
        <div className="btn-parent">
        <div className="arrow-none"></div></div>
        
        </div>
        </>
      );
    };
    

export default SignUp;