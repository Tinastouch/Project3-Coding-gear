import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom';

const ShopGallery2 = () => {

    return (
      <>
      <div className="fullscreen-div">
          <div className="btn-parent">
          <NavLink to="/1"><div className="arrow-left"></div></NavLink>
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
              <div className="subnav subnav-active"></div>
              <div className="subnav"></div>
          </div>
  
      </div>

      <div className="btn-parent" >

    <NavLink to="/3"><div className="arrow-right"></div></NavLink>
    </div>
    </div>
  
      </>
    );
  };
  
  export default withRouter(ShopGallery2);