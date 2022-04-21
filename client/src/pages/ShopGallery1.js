import React from "react";
import product1 from "../assets/product1.png"

const ShopGallery1 = () => {

  return (
    <>
    <div className="fullscreen-div">
        <div className="btn-parent">
        <div className="arrow-none"></div></div>

        <div className="column">

        <div className="subnav-parent"></div>

    <div className="login-form">
        <h2 className="tf-h2">SHOP</h2> 
        <div>
        <div className="shop-card">
            <div className="card-filler">
                <img src={product1}></img>
            </div>

            <div className="card-footer">
                <p className="card-caption">[CLOSET] HOODIE</p>
                <p className="card-caption">34.99 $</p>
            </div>

</div>
<div className="card-desc">
    <p className="item-desc">BLACK HOODIE, MENS SIZE MEDIUM</p>
    <button className="add-to-cart">ADD TO CART</button>
</div>

        </div>
        
    </div>

        <div className="subnav-parent">
            <div className="subnav subnav-active"></div>
            <div className="subnav"></div>
            <div className="subnav"></div>
        </div>

    </div>

    <div className="btn-parent" >

    <div className="arrow-right"></div>
    </div>
    </div>
    </>
  );
};

export default ShopGallery1;