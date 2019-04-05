import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Buttons";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 col-md-6 col-lg-10 max-auto text-capitalize text-center p-5"
                    >
                      <button
                        className="close-Btn"
                        onClick={() => closeModal()}
                      >
                        X
                      </button>
                      <h4>Item added in cart</h4>
                      <div className="row align-middle">
                        <div className="col-sm-2">
                          <img src={img} className="img-fluid" alt="product" />
                        </div>
                        <div className="col-sm-3 mt-4">
                          <h5>{title}</h5>
                        </div>
                        <div className="col-sm-2 mt-4">
                          <h5 className="text-muted">
                            <span className="">Price : $</span>
                            {price}
                          </h5>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <Link to="/">
                            <ButtonContainer onClick={() => closeModal()}>
                              continue shopping
                            </ButtonContainer>
                          </Link>
                        </div>
                        <div className="col-sm-2 mt-3">
                          <Link to="/cart">
                            <ButtonContainer cart onClick={() => closeModal()}>
                              go to cart
                            </ButtonContainer>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    margin: 0 auto;
  }
`;
