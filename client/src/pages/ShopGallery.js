import React from "react";

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

        <div className="shop-card">
            <div className="card-filler">
            </div>

            <div className="card-footer">
                <p className="card-caption">ITEM NAME</p>
                <p className="card-caption">ITEM PRICE</p>
            </div>



        </div>
        
    </div>

        <div className="subnav-parent">
            <div className="subnav subnav-active"></div>
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

export default ShopGallery;