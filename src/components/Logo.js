import logo from "../assets/images/logoZZ.png";

import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="znajdz" className="logoImg" />
      <span className="logoText1">ZNAJDŹ </span>
      <span className="logoText2">ZWIERZAKA</span>
    </div>
  );
};

export default Logo;
