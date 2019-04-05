import React, { Component } from "react";

export default class EmptyCart extends Component {
  state = {};
  render() {
    return (
      <div className="container max-auto mt-5">
        <div className="row">
          <div className="col-12 max-auto text-center text-title">
            <h1>Your cart is currently empty</h1>
          </div>
        </div>
      </div>
    );
  }
}
