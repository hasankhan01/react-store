import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProdcutDetails";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import AddItem from "./components/Cart/AddItem";
import FooterLinks from "./components/FooterLinks";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/productdetails" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/additem" component={AddItem} />

          <Route component={Default} />
        </Switch>

        <FooterLinks />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
