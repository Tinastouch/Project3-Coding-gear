import React, { useEffect, useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import Auth from '../utils/auth'
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../utils/helpers';
import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

const ShopCart = () => {
    const [state, dispatch] = useStoreContext();
    const [userEmail, setUserEmail] = useState("email");
    const [totalPrice, setTotalPrice] = useState(0);
    // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    // useEffect(() => {
    //   if (data) {
    //     stripePromise.then((res) => {
    //       res.redirectToCheckout({ sessionId: data.checkout.session });
    //     });
    //   }
    // }, [data]);

    const removeFromCart = item => {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    
      };

    useEffect(() => {
        setUserEmail(Auth.getProfile().data.email)
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }

        function getSum(total, item) {
            // return total + Math.round(item.price);
            return total + Number(item.price);
        }

        const total = state.cart.reduce(getSum, 0);

        setTotalPrice(total)


    }, [state.cart.length, dispatch]);

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


                                {
                                    state.cart.map((item) => {
                                        return (
                                            <>
                                                <div className="row cartrow">
                                                    <div className="form-group">
                                                        <p className="form-input" spellcheck="false">{item.name}</p>
                                                        <label className="form-label">ITEM NAME</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <p className="form-input cart-cat">{item.price}</p>
                                                        <label className="form-label">PRICE</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <p className="form-input cart-cat">
                                                            <button className="qty-btn"><p className="negativemarg">-</p></button>
                                                            1
                                                            <button className="qty-btn"><p className="negativemarg">+</p></button>
                                                        </p>
                                                        <label className="form-label">QUANTITY</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <p className="form-input cart-cat">{1 * item.price}</p>
                                                        <label className="form-label">TOTAL</label>
                                                    </div>
                                                    <button type="delete" className="add-to-cart" onClick={()=>removeFromCart(item)}>DELETE ITEM</button></div>

                                            </>
                                        )
                                    })
                                }



                                <div className="row flex-end">

                                    <div className="form-group">
                                        <p className="form-input cart-cat">{totalPrice}</p>
                                        <label className="form-label">TOTAL</label>
                                    </div>
                                    <Link to='/thankyou'  type="delete" className="add-to-cart checkout">CHECKOUT</Link></div>
            
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