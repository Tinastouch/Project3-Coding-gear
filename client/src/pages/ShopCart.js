import React from "react";
import { Redirect } from "react-router-dom";
import Auth from '../utils/auth'

const ShopCart = () => {

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
                <h2 className="tf-h2">CART</h2>

                <div className="row cartrow">
                    <div className="form-group">
                        <p className="form-input" spellcheck="false">STEVEDUSOME@GMAIL.COM</p>
                        <label className="form-label">ITEM NAME</label>
                    </div>
                    <div className="form-group">
                        <p className="form-input cart-cat">5.00</p>
                        <label className="form-label">PRICE</label>
                    </div>
                    <div className="form-group">
                    <p className="form-input cart-cat"> 
                    <button className="qty-btn"><p className="negativemarg">-</p></button> 
                    3
                    <button className="qty-btn"><p className="negativemarg">+</p></button> 
                    </p>
                        <label className="form-label">QUANTITY</label>
                    </div>
                    <div className="form-group">
                        <p className="form-input cart-cat">15.00</p>
                        <label className="form-label">TOTAL</label>
                    </div>
                    <button type="delete" className="add-to-cart delete-btn">DELETE ITEM</button></div> 

                    <div className="row cartrow">
                    <div className="form-group">
                        <p className="form-input" spellcheck="false">STEVEDUSOME@GMAIL.COM</p>
                        <label className="form-label">ITEM NAME</label>
                    </div>
                    <div className="form-group">
                        <p className="form-input cart-cat">5.00</p>
                        <label className="form-label">PRICE</label>
                    </div>
                    <div className="form-group">
                    <p className="form-input cart-cat"> 
                    <button className="qty-btn"><p className="negativemarg">-</p></button> 
                    3
                    <button className="qty-btn"><p className="negativemarg">+</p></button> 
                    </p>
                        <label className="form-label">QUANTITY</label>
                    </div>
                    <div className="form-group">
                        <p className="form-input cart-cat">15.00</p>
                        <label className="form-label">TOTAL</label>
                    </div>
                    <button type="delete" className="add-to-cart delete-btn">DELETE ITEM</button></div> 

                    <div className="row cartrow">
                    <div className="form-group">
                        <p className="form-input" spellcheck="false">STEVEDUSOME@GMAIL.COM</p>
                        <label className="form-label">ITEM NAME</label>
                    </div>
                    <div className="form-group">
                        <p className="form-input cart-cat">5.00</p>
                        <label className="form-label">PRICE</label>
                    </div>
                    <div className="form-group">
                    <p className="form-input cart-cat"> 
                    <button className="qty-btn"><p className="negativemarg">-</p></button> 
                    3
                    <button className="qty-btn"><p className="negativemarg">+</p></button> 
                    </p>
                        <label className="form-label">QUANTITY</label>
                    </div>
                    <div className="form-group">
                        <p className="form-input cart-cat">15.00</p>
                        <label className="form-label">TOTAL</label>
                    </div>
                    <button type="delete" className="add-to-cart delete-btn">DELETE ITEM</button></div> 

                    <div className="row flex-end">
                    
                    <div className="form-group">
                        <p className="form-input cart-cat">45.00</p>
                        <label className="form-label">TOTAL</label>
                    </div>
                    <button type="delete" className="add-to-cart delete-btn checkout">CHECKOUT</button></div> 

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

export default ShopCart;