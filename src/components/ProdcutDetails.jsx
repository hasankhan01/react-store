import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Buttons";

export default class ProductDetails extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* product title */}
              <div className="row">
                <div className="col-10 max-auto">
                  <h1>{title}</h1>
                </div>
                {/* product info */}
                <div className="row">
                  <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                    <h1>Model: {title}</h1>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by: <span className="test-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        Price: <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="prod-details text-capitalize mt-3 mb-0">
                      {info}
                    </p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to product</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "Add to Cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
