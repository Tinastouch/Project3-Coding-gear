import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

const ShopGallery3 = () => {

    return (
      <>
      <div className="fullscreen-div">
          <div className="btn-parent">
          <NavLink to="/2"><div className="arrow-left"></div></NavLink>
          
          </div>
        
  
          <div className="column">
  
          <div className="subnav-parent"></div>
  
      <div className="login-form">
          <h2 className="tf-h2">SHOP</h2> 
          <div>
          <div className="shop-card">
              <div className="card-filler">
              </div>
  
              <div className="card-footer">
                  <p className="card-caption">ITEM NAME</p>
                  <p className="card-caption">ITEM PRICE</p>
              </div>
  
  </div>
  <div className="card-desc">
      <p className="item-desc">Item Description/Variables</p>
      <button className="add-to-cart">ADD TO CART</button>
  </div>
  
          </div>
          
      </div>
  
          <div className="subnav-parent">
              <div className="subnav"></div>
              <div className="subnav"></div>
              <div className="subnav subnav-active"></div>
          </div>
  
      </div>
  
      <div className="btn-parent" >
  
      <div className="arrow-none"></div>
      </div>
      </div>
      </>
    );
  };
  
  export default withRouter(ShopGallery3);