import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Styled from "styled-components";
import { ButtonContainer } from "./Buttons";

export default class Navbar extends Component {
  state = {};
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg bg-primary">
        <Link to="/">
          <img src={logo} alt="Store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-item-center mr-auto">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="">
              <i className="fas fa-cart-arrow-down" />
              Cart
            </span>
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
