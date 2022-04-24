import React from "react";
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.jpg"
import { Link } from 'react-router-dom'

const ShopGallery = () => {

  return (
    <>
    <div className="fullscreen-div">
        <div className="btn-parent">
        <div className="arrow-none"></div></div>

        <div className="column">

        <div className="subnav-parent"></div>

    <div className="login-form">
        <h2 className="tf-h2">SHOP</h2>

<div className="row">

    <Link to='/1'>
        <div>
            <div className="mini-shop-card">
                <div className="mini-card-filler">
                    <img src={product1}></img>
                </div>
            </div>
            <div className="mini-card-desc">
                <p className="form-label">[CLOSET] HOODIE</p>
            </div>
        </div>
    </Link>

    <Link to='/2'>
        <div>
            <div className="mini-shop-card">
                <div className="mini-card-filler">
                    <img src={product2}></img>
                </div>
            </div>
            <div className="mini-card-desc">
                <p className="form-label">.SHOP() MASK</p>
            </div>
        </div>
    </Link>

    <Link to='/3'>
        <div>
            <div className="mini-shop-card">
                <div className="mini-card-filler">
                    <img src={product1}></img>
                </div>
            </div>
            <div className="mini-card-desc">
                <p className="form-label">PRODUCT 3</p>
            </div>
        </div>
    </Link>
        
        
</div>
        
    </div>

        <div className="subnav-parent">
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

export default ShopGallery;