import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FooterLinks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <ul className="footer-links">
              <li>
                <Link to="./">Home</Link>
              </li>
              <li>
                <Link to="./">Contact</Link>
              </li>
              <li>
                <Link to="./">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
