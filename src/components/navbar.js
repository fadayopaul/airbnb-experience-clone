import React from "react";
import logo from "../images/airbnb-logo.png";

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="" className="logo" />
    </nav>
  );
}
