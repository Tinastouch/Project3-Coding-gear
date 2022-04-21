import React from "react";
import product1 from "../assets/product1.png"

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

<div>
        <div className="mini-shop-card">
            <div className="mini-card-filler">
                <img src={product1}></img>
            </div>
</div>
<div className="mini-card-desc">
    <p className="form-label">PRODUCT 2</p>
</div>
</div>

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