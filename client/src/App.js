import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import ShopGallery from './pages/ShopGallery';
import ShopGallery1 from './pages/ShopGallery1';
import ShopGallery2 from './pages/ShopGallery2';
import ShopGallery3 from './pages/ShopGallery3';
import ShopGalleryItem from './pages/ShopGalleryItem';
import ShopCart from './pages/ShopCart';
import ThankYou from './pages/ThankYou';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import EditUserInfo from './pages/EditUserInfo';
import Navbar from './components/Navbar';

import { StoreProvider } from './utils/GlobalState';

import product1 from "./assets/product1.png";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.png";



const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <StoreProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ShopGallery} />
            {/* <Route exact path="/1" component={ShopGallery1} /> */}
            <Route exact path="/1" render={() => <ShopGalleryItem item={{
              image: product1,
              name: "HOODIE",
              _id: "1",
              description: "BLACK HOODIE, MENS SIZE MEDIUM",
              price: "35.00",
              quantity: "35"
            }}/>}/>
            <Route exact path="/2" render={() => <ShopGalleryItem item={{
              image: product2,
              name: "MASK",
              _id: "2",
              description: "BLACK .SHOP() MASK, ONE SIZE FITS ALL",
              price: "5.00",
              quantity: "10"
            }}/>}/>
            {/* <Route exact path="/3" component={ShopGallery3} /> */}
            <Route exact path="/3" render={() => <ShopGalleryItem item={{
              image: product3,
              name: "MUG",
              _id: "3",
              description: "COFFEE MUGS 8-12 FL OZ",
              price: "7.00",
              quantity: "20"
            }}/>}/>
            <Route exact path="/cart" component={ShopCart} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/user" component={EditUserInfo} />
            <Route exact path="/thankyou" component={ThankYou} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
          </StoreProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
