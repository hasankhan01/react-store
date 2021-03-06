import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from "../logo.svg";
import Styled from "styled-components";
import { ButtonContainer } from "./Buttons";
//import EmptyCart from "./Cart/EmptyCart";
import { ProductConsumer } from "../context";
//import CartList from "./Cart/CartList";
//import CartTotals from "./Cart/CartTotals";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg bg-primary">
        <Link to="/" className="navbar-brand">
          React Fast Store
          {/* <img src={logo} alt="Store" /> */}
        </Link>

        <ul className="navbar-nav align-item-center mr-auto">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/addItem" className="nav-link">
              Add item
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="cart-btn">
              <i className="fas fa-cart-arrow-down" />$
              <ProductConsumer>
                {value => {
                  const { cart } = value;
                  const { cartSubTotal } = value;
                  if (cart.length > 0) {
                    return <React.Fragment>{cartSubTotal}</React.Fragment>;
                  }
                }}
              </ProductConsumer>
            </span>
            {/* <span styele={{ display: none }}>{cartSubTotal}</span> */}
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = Styled.nav`
  background-color: var(--mainBlue)!important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize!mportant;
  }
`;
