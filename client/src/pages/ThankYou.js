import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Redirect, Link } from "react-router-dom";
import Auth from '../utils/auth'
import { QUERY_USER } from "../utils/queries";

let order = [{name:"Mask", quantity:3}, {name: "Hoodie", quantity:5}];
let orderString = [];

const OutputOrder = () => {

    {
        order.map(function(element, index, array) {
            orderString.push( <>
                <div className="row">
                <div className="form-group">
                    <p className="form-input" spellcheck="false">{element.name} x{element.quantity}</p>
                    <label className="form-label text-right">#{index+1}</label>
                </div>
               
              
               </div></>

            );
          
        })
    }  
    return (
               <><div className="gap">
               {orderString}</div></>
            )
}

const ThankYou = () => {

    const email = Auth.getProfile().data.email

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
                    <h2 className="tf-h2">THANK YOU</h2> 
                    <div className="form-group">
                        <p className="text-center">{email}</p>
                        <label className="form-label text-center">FOR YOUR PURCHASE</label>
                    </div>
                    <div className="form-group">
                        {OutputOrder()}
                    </div>
<Link to='/' className="submit-btn">
                    BACK TO SHOP
                    </Link>
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

export default ThankYou;