import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header.js";

const Header = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="cont">
          <ul>
            <li class="logo">
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <div class="navbars">
              <li>
                <Link className="place" to="/register">
                  DODAJ
                </Link>
              </li>
              <li>
                <Link className="place" to="/register">
                  ZAGINIONE
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
