import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  LogoImage,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import logo from "../../asset/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <LogoImage src={logo} alt="Logo" />
            <Span>3J Adventure Tours LLP</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#projects">Upcomming Tours</NavLink>
          <NavLink href="#skills">Custom Trips</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {/* <NavLink href="#education">Education</NavLink> */}
        </NavItems>
        {/* <ButtonContainer>
          <GitHubButton target="_blank"> Contact</GitHubButton>
        </ButtonContainer> */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Upcomming Tours
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Custom Trips
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            {/* <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink> */}
            {/* <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              // href={Bio.github}
              target="_blank"
            >
              Contact
            </GitHubButton> */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
