import React from "react";
import {
  Nav,
  Bars,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavMenu,
} from "./NavbarElement";
//Image

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Hi I'm Jun! </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/project" activeStyle>
            Projects
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/admin">Edit</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
