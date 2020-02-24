import React from "react";
import { MainHeader, Navbar, MainNav } from "../../styledcomponents/styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <MainHeader mainHeader>Todo List</MainHeader>
      <MainNav>
        <Link to="/">
          <Navbar navbar>Home</Navbar>
          {" | "}
        </Link>
        <Link to="/about">
          <Navbar navbar>About</Navbar>
        </Link>
      </MainNav>
    </div>
  );
}

export default Header;
