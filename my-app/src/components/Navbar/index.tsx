import React from "react";
import {
  HeaderItem,
  LogoContainer,
  NavMenu,
  Navbar,
  NavbarAnchor,
} from "./styles";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar>
      <HeaderItem>
        <LogoContainer>Naga Sravani</LogoContainer>
        <NavMenu>
          <li>
            <NavbarAnchor href="#about">About</NavbarAnchor>
          </li>
          <li>
            <NavbarAnchor href="#education">Education</NavbarAnchor>
          </li>
          <li>
            <NavbarAnchor href="#experience">Experience</NavbarAnchor>
          </li>
          <li>
            <NavbarAnchor href="#projects">Projects</NavbarAnchor>
          </li>
          <li>
            <NavbarAnchor href="#contact">Contact</NavbarAnchor>
          </li>
        </NavMenu>
      </HeaderItem>
    </Navbar>
  );
};

export default NavbarComponent;
