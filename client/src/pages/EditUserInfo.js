import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Redirect } from "react-router-dom";
import Auth from '../utils/auth'
import { QUERY_USER } from "../utils/queries";

const EditUserInfo = () => {
    
    const { loading, error, data } = useQuery(QUERY_USER);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`
    console.log(data.user.email);

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
                        <p className="form-input" spellCheck="false">{data.user.email}</p>
                        <label className="form-label">E-MAIL</label>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-input" spellCheck="false"></input>
                        <label className="form-label">NEW PASSWORD</label>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-input" spellCheck="false"></input>
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