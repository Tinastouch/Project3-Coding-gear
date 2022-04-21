import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import ShopGallery from './pages/ShopGallery';
import ShopGallery1 from './pages/ShopGallery1';
import ShopGallery2 from './pages/ShopGallery2';
import ShopGallery3 from './pages/ShopGallery3';
import ShopCart from './pages/ShopCart';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import EditUserInfo from './pages/EditUserInfo';
import Navbar from './components/Navbar';

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
          <Navbar />
          <Switch>
            <Route exact path="/" component={ShopGallery} />
            <Route exact path="/1" component={ShopGallery1} />
            <Route exact path="/2" component={ShopGallery2} />
            <Route exact path="/3" component={ShopGallery3} />
            <Route exact path="/cart" component={ShopCart} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/user" component={EditUserInfo} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
