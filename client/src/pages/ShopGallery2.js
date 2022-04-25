import React from "react";
import product2 from "../assets/product2.jpg";
import { NavLink, withRouter } from 'react-router-dom';

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
                  <img src={product2}></img>
              </div>
  
              <div className="card-footer">
                  <p className="card-caption">MASK</p>
                  <p className="card-caption">$5.00</p>
              </div>
  
  </div>
  <div className="card-desc">
      <p className="item-desc">BLACK .SHOP() MASK, ONE SIZE FITS ALL, 10x</p>
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