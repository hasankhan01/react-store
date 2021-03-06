import React, { Component } from "react";

export default class CartColumns extends Component {
  state = {};
  render() {
    return (
      <div className="container text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 max-auto col-lg-2">
            <p className="text-uppercase">Product</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}
