import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  border-bottom: 2px solid #888;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

export default Navbar;
