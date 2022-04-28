import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Auth from '../utils/auth'
import { UPDATE_USER } from "../utils/mutations";

const EditUserInfo = () => {
    
    const email = Auth.getProfile().data.email

    /* const [formState, setFormState] = useState({ password: '' });
    const [updateUser] = useMutation(UPDATE_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const mutationResponse = await updateUser({
            variables: {
                password: formState.password,
            },
        });
        const token = mutationResponse.data.updateUser.token;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }; */

    return (
    <>
    {Auth.loggedIn() ? (
        <>
        <div className="fullscreen-div">
            <div className="btn-parent">
                <div className="arrow-none"></div>
            </div>
    
            <div className="column">
    
                <div className="subnav-parent"></div>
    
                <form className="login-form change-password">
                    <h2 className="tf-h2">change password</h2> 
                    <div className="form-group">
                        <p className="form-input" spellCheck="false">{email}</p>
                        <label className="form-label">E-MAIL</label>
                    </div>
                    <div className="form-group">
                        <input type="password" 
                        className="form-input" 
                        spellCheck="false" 
                        id="password"
                        name="password"
                        placeholder="*****"></input>
                        <label className="form-label">NEW PASSWORD</label>
                    </div>
                    <div className="form-group">
                        <input type="password" 
                        className="form-input" 
                        spellCheck="false" 
                        id="confirm-password"
                        placeholder="*****"></input>
                        <label className="form-label">NEW PASSWORD CONFIRM</label>
                    </div>
                    <input type="submit" className="submit-btn"></input>
                </form>
    
                <div className="subnav-parent">
                    <div className="subnav subnav-active"></div>
                </div>
    
            </div>
    
            <div className="btn-parent" >
    
                <div className="arrow-none"></div>
            </div>
        </div>
        </>
    ) : <Redirect to='/login'></Redirect>}
    </>
  );
};

export default EditUserInfo;